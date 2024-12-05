grammar Cypher;

oC_Cypher: SP? oC_Statement ( SP? ';' )? SP? EOF;

oC_Statement
    : oC_Query
    | oC_Command
    ;

oC_Query
    : oC_RegularQuery
    | oC_StandaloneCall
    ;

oC_RegularQuery
    : oC_SingleQuery ( SP? UNION SP? ( ALL SP? )? oC_SingleQuery )*
    ;

oC_SingleQuery
    : oC_SinglePartQuery
    | oC_MultiPartQuery
    ;

oC_SinglePartQuery
    : ( oC_ReadingClause SP? )*
      ( oC_UpdatingClause SP? )*
      oC_Return
    ;

oC_MultiPartQuery
    : ( oC_ReadingClause SP? )*
      ( oC_UpdatingClause SP? )*
      oC_With SP?
      oC_SinglePartQuery
    ;

oC_ReadingClause
    : oC_Match
    | oC_Unwind
    | oC_InQueryCall
    ;

oC_UpdatingClause
    : oC_Create
    | oC_Merge
    | oC_Delete
    | oC_Set
    | oC_Remove
    ;

oC_Match
    : ( OPTIONAL SP? )? MATCH SP? oC_Pattern ( SP? oC_Where )?
    ;

oC_Unwind
    : UNWIND SP? oC_Expression SP? AS SP? oC_Variable
    ;

oC_Create
    : CREATE SP? oC_Pattern
    ;

oC_Set
    : SET SP? oC_SetItem ( SP? ',' SP? oC_SetItem )*
    ;

oC_Delete
    : ( DETACH SP? )? DELETE SP? oC_Expression ( SP? ',' SP? oC_Expression )*
    ;

oC_Remove
    : REMOVE SP? oC_RemoveItem ( SP? ',' SP? oC_RemoveItem )*
    ;

oC_With
    : WITH ( SP? DISTINCT )? SP? oC_ReturnBody ( SP? oC_Where )?
    ;

oC_Return
    : RETURN ( SP? DISTINCT )? SP? oC_ReturnBody
    ;

oC_ReturnBody
    : oC_ReturnItems
      ( SP? oC_Order )?
      ( SP? oC_Skip )?
      ( SP? oC_Limit )?
    ;

oC_Variable
    : oC_SymbolicName
    ;

oC_SymbolicName
    : UnescapedSymbolicName
    | EscapedSymbolicName
    | HexLetter
    | COUNT
    | FILTER
    | EXTRACT
    | ANY
    | NONE
    | SINGLE
    ;

UnescapedSymbolicName
    : IdentifierStart IdentifierPart*
    ;

EscapedSymbolicName
    : '`' ~'`'* '`'
    ;

IdentifierStart
    : [a-zA-Z_]
    ;

IdentifierPart
    : [a-zA-Z0-9_]
    ;

HexLetter
    : [A-Fa-f]
    ;

// Lexer Rules
UNION: U N I O N;
ALL: A L L;
OPTIONAL: O P T I O N A L;
MATCH: M A T C H;
UNWIND: U N W I N D;
AS: A S;
MERGE: M E R G E;
CREATE: C R E A T E;
SET: S E T;
DETACH: D E T A C H;
DELETE: D E L E T E;
REMOVE: R E M O V E;
WITH: W I T H;
RETURN: R E T U R N;
DISTINCT: D I S T I N C T;
ORDER: O R D E R;
BY: B Y;
L_SKIP: S K I P;
LIMIT: L I M I T;
ASCENDING: A S C;
ASC: A S C;
DESCENDING: D E S C;
DESC: D E S C;
WHERE: W H E R E;
OR: O R;
XOR: X O R;
AND: A N D;
NOT: N O T;
IN: I N;
STARTS: S T A R T S;
ENDS: E N D S;
CONTAINS: C O N T A I N S;
IS: I S;
NULL: N U L L;
COUNT: C O U N T;
FILTER: F I L T E R;
EXTRACT: E X T R A C T;
ANY: A N Y;
NONE: N O N E;
SINGLE: S I N G L E;

fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

SP: [ \t\n\r\f]+;