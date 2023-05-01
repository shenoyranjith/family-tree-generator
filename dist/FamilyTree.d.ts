import { fabric } from 'fabric';
export interface Relation {
    partner: Node | undefined;
    isMarried: boolean | undefined;
    children: Node[];
    _relation?: fabric.Line;
    _parentLine?: fabric.Line;
}
export interface Node {
    id: string | number;
    name: string;
    image?: string;
    generation?: number;
    relationships: Relation[];
    onClick?: (node: Node) => void;
    _object?: fabric.Group;
    _childLine: fabric.Group;
}
interface Options {
    id: string;
    width: number;
    height: number;
    boundToParentSize?: boolean;
}
export default class FamilyTree {
    private root;
    canvas: fabric.Canvas;
    constructor(root: Node, options: Options);
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
export {};
