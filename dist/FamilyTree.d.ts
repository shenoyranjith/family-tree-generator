export interface Relation {
    partner: Node | undefined;
    isMarried: boolean | undefined;
    children: Node[];
    _relation?: any;
    _parentLine?: any;
}
export interface Node {
    id: string | number;
    name: string;
    image?: string;
    generation?: number;
    relationships: Relation[];
    onClick?: (node: Node) => void;
    _object?: any;
    _childLine: any;
}
export default class FamilyTree {
    private root;
    canvas: any;
    constructor(root: Node, options: any);
    private _createCanvas;
    private _setupCanvas;
    private _setImageSrc;
    private _createNode;
    private _drawPartnerLine;
    private _drawParentLine;
    private _drawChildLine;
    private _drawNode;
    private _groupNodes;
    private _positionNodes;
    private _drawPartnerRelations;
    private _drawChildRelations;
    private _bringNodesToFront;
    drawTree: () => Promise<void>;
}
