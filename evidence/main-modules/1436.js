// analysis/pretty/main.js:106733; webpack module 1436
function(e, t) {
    var n = {};
    n[25121] = new Error("missing arguments"), n[25121].code = 25121, n[25122] = new Error("unsupported hive"), 
    n[25122].code = 25122, n[25123] = new Error("expected to have groups of 4 arguments for each value that is written to the registry"), 
    n[25123].code = 25123, n[25124] = new Error('missing or invalid architecture from arguments, use "A" (agnostic), "S" (specific), "32" or "64"'), 
    n[25124].code = 25124, n[25125] = new Error("missing OSArchitecture global. Forgot to load util.vbs? submit an issue asap with steps to recreate"), 
    n[25125].code = 25125, n[25126] = new Error("invalid os architecture detected"), 
    n[25126].code = 25126, n[25127] = new Error("empty line written to vbscript stdin"), 
    n[25127].code = 25127, n[5] = new Error("access is denied"), n[5].code = 5, n[2] = new Error("registry path does not exist"), 
    n[2].code = 2;
    var r = new Error("wbemErrFailed");
    r.description = "The call failed.", r.code = 2147749889, n[2147749889] = r;
    var i = new Error("wbemErrNotFound");
    i.description = "The object could not be found.", i.code = 2147749890, n[2147749890] = i;
    var o = new Error("wbemErrAccessDenied");
    o.description = "The current user does not have permission to perform the action.", 
    o.code = 2147749891, n[2147749891] = o;
    var a = new Error("wbemErrProviderFailure");
    a.description = "The provider has failed at some time other than during initialization.", 
    a.code = 2147749892, n[2147749892] = a;
    var s = new Error("wbemErrTypeMismatch");
    s.description = "A type mismatch occurred.", s.code = 2147749893, n[2147749893] = s;
    var l = new Error("wbemErrOutOfMemory");
    l.description = "There was not enough memory for the operation.", l.code = 2147749894, 
    n[2147749894] = l;
    var c = new Error("wbemErrInvalidContext");
    c.description = "The SWbemNamedValue object is not valid.", c.code = 2147749895, 
    n[2147749895] = c;
    var u = new Error("wbemErrInvalidParameter");
    u.description = "One of the parameters to the call is not correct.", u.code = 2147749896, 
    n[2147749896] = u;
    var d = new Error("wbemErrNotAvailable");
    d.description = "The resource, typically a remote server, is not currently available.", 
    d.code = 2147749897, n[2147749897] = d;
    var h = new Error("wbemErrCriticalError");
    h.description = "An internal, critical, and unexpected error occurred. Report this error to Microsoft Technical Support.", 
    h.code = 2147749898, n[2147749898] = h;
    var p = new Error("wbemErrInvalidStream");
    p.description = "One or more network packets were corrupted during a remote session.", 
    p.code = 2147749899, n[2147749899] = p;
    var f = new Error("wbemErrNotSupported");
    f.description = "The feature or operation is not supported.", f.code = 2147749900, 
    n[2147749900] = f;
    var _ = new Error("wbemErrInvalidSuperclass");
    _.description = "The parent class specified is not valid.", _.code = 2147749901, 
    n[2147749901] = _;
    var m = new Error("wbemErrInvalidNamespace");
    m.description = "The namespace specified could not be found.", m.code = 2147749902, 
    n[2147749902] = m;
    var g = new Error("wbemErrInvalidObject");
    g.description = "The specified instance is not valid.", g.code = 2147749903, n[2147749903] = g;
    var v = new Error("wbemErrInvalidClass");
    v.description = "The specified class is not valid.", v.code = 2147749904, n[2147749904] = v;
    var y = new Error("wbemErrProviderNotFound");
    y.description = "A provider referenced in the schema does not have a corresponding registration.", 
    y.code = 2147749905, n[2147749905] = y;
    var E = new Error("wbemErrInvalidProviderRegistration");
    E.description = "A provider referenced in the schema has an incorrect or incomplete registration. This error may be caused by a missing pragma namespace command in the MOF file used to register the provider, resulting in the provider being registered in the wrong WMI namespace. This error may also be caused by a corrupt repository, which may be fixed by deleting it and recompiling the MOF files.", 
    E.code = 2147749906, n[2147749906] = E;
    var b = new Error("wbemErrProviderLoadFailure");
    b.description = "COM cannot locate a provider referenced in the schema. This error may be caused by any of the following:", 
    b.code = 2147749907, n[2147749907] = b;
    var w = new Error("wbemErrInitializationFailure");
    w.description = "A component, such as a provider, failed to initialize for internal reasons.", 
    w.code = 2147749908, n[2147749908] = w;
    var S = new Error("wbemErrTransportFailure");
    S.description = "A networking error occurred, preventing normal operation.", S.code = 2147749909, 
    n[2147749909] = S;
    var T = new Error("wbemErrInvalidOperation");
    T.description = "The requested operation is not valid. This error usually applies to invalid attempts to delete classes or properties.", 
    T.code = 2147749910, n[2147749910] = T;
    var A = new Error("wbemErrInvalidQuery");
    A.description = "The requested operation is not valid. This error usually applies to invalid attempts to delete classes or properties.", 
    A.code = 2147749911, n[2147749911] = A;
    var O = new Error("wbemErrInvalidQueryType");
    O.description = "The requested query language is not supported.", O.code = 2147749912, 
    n[2147749912] = O;
    var C = new Error("wbemErrAlreadyExists");
    C.description = "In a put operation, the wbemChangeFlagCreateOnly flag was specified, but the instance already exists.", 
    C.code = 2147749913, n[2147749913] = C;
    var N = new Error("wbemErrOverrideNotAllowed");
    N.description = "It is not possible to perform the add operation on this qualifier because the owning object does not permit overrides.", 
    N.code = 2147749914, n[2147749914] = N;
    var I = new Error("wbemErrPropagatedQualifier");
    I.description = "The user attempted to delete a qualifier that was not owned. The qualifier was inherited from a parent class.", 
    I.code = 2147749915, n[2147749915] = I;
    var R = new Error("wbemErrPropagatedProperty");
    R.description = "The user attempted to delete a property that was not owned. The property was inherited from a parent class.", 
    R.code = 2147749916, n[2147749916] = R;
    var D = new Error("wbemErrUnexpected");
    D.description = "The client made an unexpected and illegal sequence of calls, such as calling EndEnumeration before calling BeginEnumeration.", 
    D.code = 2147749917, n[2147749917] = D;
    var L = new Error("wbemErrIllegalOperation");
    L.description = "The user requested an illegal operation, such as spawning a class from an instance.", 
    L.code = 2147749918, n[2147749918] = L;
    var k = new Error("wbemErrCannotBeKey");
    k.description = "There was an illegal attempt to specify a key qualifier on a property that cannot be a key. The keys are specified in the class definition for an object, and cannot be altered on a per-instance basis.", 
    k.code = 2147749919, n[2147749919] = k;
    var M = new Error("wbemErrIncompleteClass");
    M.description = "The current object is not a valid class definition. Either it is incomplete, or it has not been registered with WMI using SWbemObject.Put_.", 
    M.code = 2147749920, n[2147749920] = M;
    var P = new Error("wbemErrInvalidSyntax");
    P.description = "The syntax of an input parameter is incorrect for the applicable data structure. For example, when a CIM datetime structure does not have the correct format when passed to SWbemDateTime.SetFileTime.", 
    P.code = 2147749921, n[2147749921] = P;
    var x = new Error("wbemErrNondecoratedObject");
    x.description = "Reserved for future use.", x.code = 2147749922, n[2147749922] = x;
    var F = new Error("wbemErrReadOnly");
    F.description = "The property that you are attempting to modify is read-only.", 
    F.code = 2147749923, n[2147749923] = F;
    var j = new Error("wbemErrProviderNotCapable");
    j.description = "The provider cannot perform the requested operation. This would include a query that is too complex, retrieving an instance, creating or updating a class, deleting a class, or enumerating a class.", 
    j.code = 2147749924, n[2147749924] = j;
    var U = new Error("wbemErrClassHasChildren");
    U.description = "An attempt was made to make a change that would invalidate a subclass.", 
    U.code = 2147749925, n[2147749925] = U;
    var W = new Error("wbemErrClassHasInstances");
    W.description = "An attempt has been made to delete or modify a class that has instances.", 
    W.code = 2147749926, n[2147749926] = W;
    var B = new Error("wbemErrQueryNotImplemented");
    B.description = "Reserved for future use.", B.code = 2147749927, n[2147749927] = B;
    var H = new Error("wbemErrIllegalNull");
    H.description = "A value of Nothing was specified for a property that may not be Nothing, such as one that is marked by a Key, Indexed, or Not_Null qualifier.", 
    H.code = 2147749928, n[2147749928] = H;
    var $ = new Error("wbemErrInvalidQualifierType");
    $.description = "The CIM type specified for a property is not valid.", $.code = 2147749929, 
    n[2147749929] = $;
    var Y = new Error("wbemErrInvalidPropertyType");
    Y.description = "The CIM type specified for a property is not valid.", Y.code = 2147749930, 
    n[2147749930] = Y;
    var z = new Error("wbemErrValueOutOfRange");
    z.description = "The request was made with an out-of-range value, or is incompatible with the type.", 
    z.code = 2147749931, n[2147749931] = z;
    var G = new Error("wbemErrCannotBeSingleton");
    G.description = "An illegal attempt was made to make a class singleton, such as when the class is derived from a non-singleton class.", 
    G.code = 2147749932, n[2147749932] = G;
    var q = new Error("wbemErrInvalidCimType");
    q.description = "The CIM type specified is not valid.", q.code = 2147749933, n[2147749933] = q;
    var V = new Error("wbemErrInvalidMethod");
    V.description = "The requested method is not available.", V.code = 2147749934, n[2147749934] = V;
    var K = new Error("wbemErrInvalidMethodParameters");
    K.description = "The parameters provided for the method are not valid.", K.code = 2147749935, 
    n[2147749935] = K;
    var J = new Error("wbemErrSystemProperty");
    J.description = "There was an attempt to get qualifiers on a system property.", 
    J.code = 2147749936, n[2147749936] = J;
    var X = new Error("wbemErrInvalidProperty");
    X.description = "The property type is not recognized.", X.code = 2147749937, n[2147749937] = X;
    var Q = new Error("wbemErrCallCancelled");
    Q.description = "An asynchronous process has been canceled internally or by the user. Note that due to the timing and nature of the asynchronous operation the operation may not have been truly canceled.", 
    Q.code = 2147749938, n[2147749938] = Q;
    var Z = new Error("wbemErrShuttingDown");
    Z.description = "The user has requested an operation while WMI is in the process of shutting down.", 
    Z.code = 2147749939, n[2147749939] = Z;
    var ee = new Error("wbemErrPropagatedMethod");
    ee.description = "An attempt was made to reuse an existing method name from a parent class, and the signatures did not match.", 
    ee.code = 2147749940, n[2147749940] = ee;
    var te = new Error("wbemErrUnsupportedParameter");
    te.description = "One or more parameter values, such as a query text, is too complex or unsupported. WMI is therefore requested to retry the operation with simpler parameters.", 
    te.code = 2147749941, n[2147749941] = te;
    var ne = new Error("wbemErrMissingParameter");
    ne.description = "A parameter was missing from the method call.", ne.code = 2147749942, 
    n[2147749942] = ne;
    var re = new Error("wbemErrInvalidParameterId");
    re.description = "A method parameter has an ID qualifier that is not valid.", re.code = 2147749943, 
    n[2147749943] = re;
    var ie = new Error("wbemErrNonConsecutiveParameterIds");
    ie.description = "One or more of the method parameters have ID qualifiers that are out of sequence.", 
    ie.code = 2147749944, n[2147749944] = ie;
    var oe = new Error("wbemErrParameterIdOnRetval");
    oe.description = "The return value for a method has an ID qualifier.", oe.code = 2147749945, 
    n[2147749945] = oe;
    var ae = new Error("wbemErrInvalidObjectPath");
    ae.description = "The specified object path was not valid.", ae.code = 2147749946, 
    n[2147749946] = ae;
    var se = new Error("wbemErrOutOfDiskSpace");
    se.description = "Windows Server 2003:  Disk is out of space or the 4 GB limit on WMI repository (CIM repository) size is reached.", 
    se.code = 2147749947, n[2147749947] = se;
    var le = new Error("wbemErrBufferTooSmall");
    le.description = "The supplied buffer was too small to hold all the objects in the enumerator or to read a string property.", 
    le.code = 2147749948, n[2147749948] = le;
    var ce = new Error("wbemErrUnsupportedPutExtension");
    ce.description = "The provider does not support the requested put operation.", ce.code = 2147749949, 
    n[2147749949] = ce;
    var ue = new Error("wbemErrUnknownObjectType");
    ue.description = "An object with an incorrect type or version was encountered during marshaling.", 
    ue.code = 2147749950, n[2147749950] = ue;
    var de = new Error("wbemErrUnknownPacketType");
    de.description = "A packet with an incorrect type or version was encountered during marshaling.", 
    de.code = 2147749951, n[2147749951] = de;
    var he = new Error("wbemErrMarshalVersionMismatch");
    he.description = "The packet has an unsupported version.", he.code = 2147749952, 
    n[2147749952] = he;
    var pe = new Error("wbemErrMarshalInvalidSignature");
    pe.description = "The packet appears to be corrupted.", pe.code = 2147749953, n[2147749953] = pe;
    var fe = new Error("wbemErrInvalidQualifier");
    fe.description = "An attempt has been made to mismatch qualifiers, such as putting [key] on an object instead of a property.", 
    fe.code = 2147749954, n[2147749954] = fe;
    var _e = new Error("wbemErrInvalidDuplicateParameter");
    _e.description = "A duplicate parameter has been declared in a CIM method.", _e.code = 2147749955, 
    n[2147749955] = _e;
    var me = new Error("wbemErrTooMuchData");
    me.description = "Reserved for future use.", me.code = 2147749956, n[2147749956] = me;
    var ge = new Error("wbemErrServerTooBusy");
    ge.description = "A call to IWbemObjectSink::Indicate has failed. The provider may choose to refire the event.", 
    ge.code = 2147749957, n[2147749957] = ge;
    var ve = new Error("wbemErrInvalidFlavor");
    ve.description = "The specified flavor was not valid.", ve.code = 2147749958, n[2147749958] = ve;
    var ye = new Error("wbemErrCircularReference");
    ye.description = "An attempt has been made to create a reference that is circular (for example, deriving a class from itself).", 
    ye.code = 2147749959, n[2147749959] = ye;
    var Ee = new Error("wbemErrUnsupportedClassUpdate");
    Ee.description = "The specified class is not supported.", Ee.code = 2147749960, 
    n[2147749960] = Ee;
    var be = new Error("wbemErrCannotChangeKeyInheritance");
    be.description = "An attempt was made to change a key when instances or subclasses are already using the key.", 
    be.code = 2147749961, n[2147749961] = be;
    var we = new Error("wbemErrCannotChangeIndexInheritance");
    we.description = "An attempt was made to change an index when instances or subclasses are already using the index.", 
    we.code = 2147749968, n[2147749968] = we;
    var Se = new Error("wbemErrTooManyProperties");
    Se.description = "An attempt was made to create more properties than the current version of the class supports.", 
    Se.code = 2147749969, n[2147749969] = Se;
    var Te = new Error("wbemErrUpdateTypeMismatch");
    Te.description = "A property was redefined with a conflicting type in a derived class.", 
    Te.code = 2147749970, n[2147749970] = Te;
    var Ae = new Error("wbemErrUpdateOverrideNotAllowed");
    Ae.description = "An attempt was made in a derived class to override a non-overrideable qualifier.", 
    Ae.code = 2147749971, n[2147749971] = Ae;
    var Oe = new Error("wbemErrUpdatePropagatedMethod");
    Oe.description = "A method was redeclared with a conflicting signature in a derived class.", 
    Oe.code = 2147749972, n[2147749972] = Oe;
    var Ce = new Error("wbemErrMethodNotImplemented");
    Ce.description = "An attempt was made to execute a method not marked with [implemented] in any relevant class.", 
    Ce.code = 2147749973, n[2147749973] = Ce;
    var Ne = new Error("wbemErrMethodDisabled");
    Ne.description = "An attempt was made to execute a method marked with [disabled].", 
    Ne.code = 2147749974, n[2147749974] = Ne;
    var Ie = new Error("wbemErrRefresherBusy");
    Ie.description = "The refresher is busy with another operation.", Ie.code = 2147749975, 
    n[2147749975] = Ie;
    var Re = new Error("wbemErrUnparsableQuery");
    Re.description = "The filtering query is syntactically not valid.", Re.code = 2147749976, 
    n[2147749976] = Re;
    var De = new Error("wbemErrNotEventClass");
    De.description = "The FROM clause of a filtering query references a class that is not an event class (not derived from __Event).", 
    De.code = 2147749977, n[2147749977] = De;
    var Le = new Error("wbemErrMissingGroupWithin");
    Le.description = "A GROUP BY clause was used without the corresponding GROUP WITHIN clause.", 
    Le.code = 2147749978, n[2147749978] = Le;
    var ke = new Error("wbemErrMissingAggregationList");
    ke.description = "A GROUP BY clause was used. Aggregation on all properties is not supported.", 
    ke.code = 2147749979, n[2147749979] = ke;
    var Me = new Error("wbemErrPropertyNotAnObject");
    Me.description = "Dot notation was used on a property that is not an embedded object.", 
    Me.code = 2147749980, n[2147749980] = Me;
    var Pe = new Error("wbemErrAggregatingByObject");
    Pe.description = "A GROUP BY clause references a property that is an embedded object without using dot notation.", 
    Pe.code = 2147749981, n[2147749981] = Pe;
    var xe = new Error("wbemErrUninterpretableProviderQuery");
    xe.description = "An event provider registration query ( __EventProviderRegistration) did not specify the classes for which events were provided.", 
    xe.code = 2147749983, n[2147749983] = xe;
    var Fe = new Error("wbemErrBackupRestoreWinmgmtRunning");
    Fe.description = "An request was made to back up or restore the repository while WMI was using it.", 
    Fe.code = 2147749984, n[2147749984] = Fe;
    var je = new Error("wbemErrQueueOverflow");
    je.description = "The asynchronous delivery queue overflowed due to the event consumer being too slow.", 
    je.code = 2147749985, n[2147749985] = je;
    var Ue = new Error("wbemErrPrivilegeNotHeld");
    Ue.description = "The operation failed because the client did not have the necessary security privilege.", 
    Ue.code = 2147749986, n[2147749986] = Ue;
    var We = new Error("wbemErrInvalidOperator");
    We.description = "The operator is not valid for this property type.", We.code = 2147749987, 
    n[2147749987] = We;
    var Be = new Error("wbemErrLocalCredentials");
    Be.description = "The user specified a username, password or authority for a local connection. The user must use a blank username/password and rely on default security.", 
    Be.code = 2147749988, n[2147749988] = Be;
    var He = new Error("wbemErrCannotBeAbstract");
    He.description = "The class was made abstract when its parent class is not abstract.", 
    He.code = 2147749989, n[2147749989] = He;
    var $e = new Error("wbemErrAmendedObject");
    $e.description = "An amended object was put without the wbemFlagUseAmendedQualifiers flag being specified.", 
    $e.code = 2147749990, n[2147749990] = $e;
    var Ye = new Error("wbemErrClientTooSlow");
    Ye.description = "Windows Server 2003:  The client was not retrieving objects quickly enough from an enumeration. This constant is returned when a client creates an enumeration object but does not retrieve objects from the enumerator in a timely fashion, causing the enumerator's object caches to get backed up.", 
    Ye.code = 2147749991, n[2147749991] = Ye;
    var ze = new Error("wbemErrNullSecurityDescriptor");
    ze.description = "Windows Server 2003:  A null security descriptor was used.", ze.code = 2147749992, 
    n[2147749992] = ze;
    var Ge = new Error("wbemErrTimeout");
    Ge.description = "Windows Server 2003:  The operation timed out.", Ge.code = 2147749993, 
    n[2147749993] = Ge;
    var qe = new Error("wbemErrInvalidAssociation");
    qe.description = "Windows Server 2003:  The association being used is not valid.", 
    qe.code = 2147749994, n[2147749994] = qe;
    var Ve = new Error("wbemErrAmbiguousOperation");
    Ve.description = "Windows Server 2003:  The operation was ambiguous.", Ve.code = 2147749995, 
    n[2147749995] = Ve;
    var Ke = new Error("wbemErrQuotaViolation");
    Ke.description = "Windows Server 2003:  WMI is taking up too much memory. This could be caused either by low memory availability or excessive memory consumption by WMI.", 
    Ke.code = 2147749996, n[2147749996] = Ke;
    var Je = new Error("wbemErrTransactionConflict");
    Je.description = "Windows Server 2003:  The operation resulted in a transaction conflict.", 
    Je.code = 2147749997, n[2147749997] = Je;
    var Xe = new Error("wbemErrForcedRollback");
    Xe.description = "Windows Server 2003:  The transaction forced a rollback.", Xe.code = 2147749998, 
    n[2147749998] = Xe;
    var Qe = new Error("wbemErrUnsupportedLocale");
    Qe.description = "Windows Server 2003:  The locale used in the call is not supported.", 
    Qe.code = 2147749999, n[2147749999] = Qe;
    var Ze = new Error("wbemErrHandleOutOfDate");
    Ze.description = "Windows Server 2003:  The object handle is out of date.", Ze.code = 214775e4, 
    n[214775e4] = Ze;
    var et = new Error("wbemErrConnectionFailed");
    et.description = "Windows Server 2003:  Indicates that the connection to the SQL database failed.", 
    et.code = 2147750001, n[2147750001] = et;
    var tt = new Error("wbemErrInvalidHandleRequest");
    tt.description = "Windows Server 2003:  The handle request was not valid.", tt.code = 2147750002, 
    n[2147750002] = tt;
    var nt = new Error("wbemErrPropertyNameTooWide");
    nt.description = "Windows Server 2003:  The property name contains more than 255 characters.", 
    nt.code = 2147750003, n[2147750003] = nt;
    var rt = new Error("wbemErrClassNameTooWide");
    rt.description = "Windows Server 2003:  The class name contains more than 255 characters.", 
    rt.code = 2147750004, n[2147750004] = rt;
    var it = new Error("wbemErrMethodNameTooWide");
    it.description = "Windows Server 2003:  The method name contains more than 255 characters.", 
    it.code = 2147750005, n[2147750005] = it;
    var ot = new Error("wbemErrQualifierNameTooWide");
    ot.description = "Windows Server 2003:  The qualifier name contains more than 255 characters.", 
    ot.code = 2147750006, n[2147750006] = ot;
    var at = new Error("wbemErrRerunCommand");
    at.description = "Windows Server 2003:  Indicates that an SQL command should be rerun because there is a deadlock in SQL. This can be returned only when data is being stored in an SQL database.", 
    at.code = 2147750007, n[2147750007] = at;
    var st = new Error("wbemErrDatabaseVerMismatch");
    st.description = "Windows Server 2003:  The database version does not match the version that the repository driver processes.", 
    st.code = 2147750008, n[2147750008] = st;
    var lt = new Error("wbemErrVetoDelete");
    lt.description = "Windows Server 2003:  WMI cannot do the delete operation because the provider does not allow it.", 
    lt.code = 2147750010, n[2147750010] = lt;
    var ct = new Error("wbemErrVetoPut");
    ct.description = "Windows Server 2003:  WMI cannot do the put operation because the provider does not allow it.", 
    ct.code = 2147750010, n[2147750010] = ct;
    var ut = new Error("wbemErrInvalidLocale");
    ut.description = "Windows Server 2003:  The specified locale identifier was not valid for the operation.", 
    ut.code = 2147750016, n[2147750016] = ut;
    var dt = new Error("wbemErrProviderSuspended");
    dt.description = "Windows Server 2003:  The provider is suspended.", dt.code = 2147750017, 
    n[2147750017] = dt;
    var ht = new Error("wbemErrSynchronizationRequired");
    ht.description = "Windows Server 2003:  The object must be committed and retrieved again before the requested operation can succeed. This constant is returned when an object must be committed and re-retrieved to see the property value.", 
    ht.code = 2147750018, n[2147750018] = ht;
    var pt = new Error("wbemErrNoSchema");
    pt.description = "Windows Server 2003:  The operation cannot be completed because no schema is available.", 
    pt.code = 2147750019, n[2147750019] = pt;
    var ft = new Error("wbemErrProviderAlreadyRegistered");
    ft.description = "Windows Server 2003:  The provider registration cannot be done because the provider is already registered.", 
    ft.code = 2147750020, n[2147750020] = ft;
    var _t = new Error("wbemErrProviderNotRegistered");
    _t.description = "Windows Server 2003:  The provider for the requested data is not registered.", 
    _t.code = 2147750021, n[2147750021] = _t;
    var mt = new Error("wbemErrFatalTransportError");
    mt.description = "Windows Server 2003:  A fatal transport error occurred and other transport will not be attempted.", 
    mt.code = 2147750022, n[2147750022] = mt;
    var gt = new Error("wbemErrEncryptedConnectionRequired");
    gt.description = "Windows Server 2003:  The client connection to WINMGMT must be encrypted for this operation. The IWbemServices proxy security settings should be adjusted and the operation retried.", 
    gt.code = 2147750023, n[2147750023] = gt;
    var vt = new Error("wbemErrRegistrationTooBroad");
    vt.description = "Windows Server 2003:  The provider registration overlaps with the system event domain.", 
    vt.code = 2147753985, n[2147753985] = vt;
    var yt = new Error("wbemErrRegistrationTooPrecise");
    yt.description = "Windows Server 2003:  A WITHIN clause was not used in this query.", 
    yt.code = 2147753986, n[2147753986] = yt;
    var Et = new Error("wbemErrTimedout");
    Et.description = "Windows Server 2003:  Automation-specific error.", Et.code = 2147758081, 
    n[2147758081] = Et;
    var bt = new Error("wbemErrResetToDefault");
    bt.description = "undefined", bt.code = 2147758082, n[2147758082] = bt, e.exports = n;
}
