use crate::AppWindow;
use slint::{
    ComponentHandle, Rgb8Pixel,
    platform::{
        Platform, PlatformError, WindowAdapter,
        software_renderer::{MinimalSoftwareWindow, RepaintBufferType},
    },
};
use std::{fs::File, path::Path, rc::Rc};
pub struct Headless(pub Rc<MinimalSoftwareWindow>);
impl Platform for Headless {
    fn create_window_adapter(&self) -> Result<Rc<dyn WindowAdapter>, PlatformError> {
        Ok(self.0.clone())
    }
}
pub fn setup() -> Rc<MinimalSoftwareWindow> {
    let window = MinimalSoftwareWindow::new(RepaintBufferType::ReusedBuffer);
    slint::platform::set_platform(Box::new(Headless(window.clone()))).expect("headless platform");
    window
}
pub fn save(
    ui: &AppWindow,
    window: Rc<MinimalSoftwareWindow>,
    path: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    let width = 1080usize;
    let height = 760usize;
    ui.window()
        .set_size(slint::PhysicalSize::new(width as u32, height as u32));
    ui.show()?;
    slint::platform::update_timers_and_animations();
    let mut pixels = vec![Rgb8Pixel::default(); width * height];
    window.draw_if_needed(|renderer| {
        renderer.render(&mut pixels, width);
    });
    let bytes: Vec<u8> = pixels.iter().flat_map(|p| [p.r, p.g, p.b]).collect();
    let mut encoder = png::Encoder::new(File::create(path)?, width as u32, height as u32);
    encoder.set_color(png::ColorType::Rgb);
    encoder.set_depth(png::BitDepth::Eight);
    encoder.write_header()?.write_image_data(&bytes)?;
    Ok(())
}
