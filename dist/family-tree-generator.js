var f = Object.defineProperty;
var A = (l, e, i) => e in l ? f(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i;
var c = (l, e, i) => (A(l, typeof e != "symbol" ? e + "" : e, i), i);
const w = "data:image/png;base64,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";
const u = fabric.util.createClass(fabric.Group, {
  type: "nodeGroup",
  initialize: function(l, e) {
    e || (e = {}), this.callSuper("initialize", l, e), this.set("isNode", !0);
  }
}), g = {
  stroke: "black",
  strokeWidth: 3,
  selectable: !1,
  evented: !1
};
class m {
  constructor(e, i) {
    c(this, "_createCanvas", (e) => {
      const i = document.getElementById(e.id), t = i == null ? void 0 : i.parentElement;
      let s = t != null && e.height > t.clientHeight && e.boundToParentSize ? t.clientHeight : e.height, n = t != null && e.width > t.clientWidth && e.boundToParentSize ? t.clientWidth : e.width;
      return new fabric.Canvas(e.id, {
        width: n,
        height: s,
        hoverCursor: "pointer",
        selection: !1,
        allowTouchScrolling: !0,
        enableRetinaScaling: !1,
        isDrawingMode: !1
      });
    });
    c(this, "_setupCanvas", () => {
      function e(s) {
        const n = s.e, o = n.deltaY;
        let r = this.getZoom();
        r *= 0.999 ** o, r > 20 && (r = 20), r < 0.1 && (r = 0.1), this.zoomToPoint({ x: n.offsetX, y: n.offsetY }, r), s.e.preventDefault(), s.e.stopPropagation();
      }
      function i(s) {
        const n = s.e;
        if (n.touches && n.touches.length == 2) {
          this.isDragging = !1;
          let o = new fabric.Point(
            n.touches[0].clientX,
            n.touches[0].clientY
          ), r = new fabric.Point(
            n.touches[1].clientX,
            n.touches[1].clientY
          ), a = o.midPointFrom(r);
          s.self.state == "start" && (this.zoomStartScale = this.getZoom());
          let h = this.zoomStartScale * s.self.scale;
          console.log(a), this.zoomToPoint(a, h), this.isDragging = !0;
        }
      }
      function t() {
        var s = this.viewportTransform;
        s[4] = this.getCenter().left - 150, s[5] = 150, this.setViewportTransform(s), this.setZoom(1), this.requestRenderAll();
      }
      this.canvas.on("mouse:wheel", e), this.canvas.on("touch:gesture", i), this.canvas.on("touch:longpress", t), this.canvas.on("mouse:dblclick", t), this.canvas.on("mouse:down", function(s) {
        if (s.target)
          return;
        var n = s.e;
        let o = n.type === "touchstart" && n.touches.length === 1;
        this.isDragging = !0, this.setCursor("grabbing"), this.lastPosX = o ? n.touches[0].clientX : n.clientX, this.lastPosY = o ? n.touches[0].clientY : n.clientY;
      }), this.canvas.on("mouse:move", function(s) {
        if (this.isDragging) {
          let r = s.e.type === "touchmove";
          var n = s.e;
          let a = r ? n.touches[0].clientX : n.clientX, h = r ? n.touches[0].clientY : n.clientY;
          const d = this.getZoom();
          var o = this.viewportTransform;
          o[4] += a - this.lastPosX, o[5] += h - this.lastPosY, o[4] > this.getWidth() && (o[4] = this.getWidth()), o[4] < -(this.getWidth() * d) && (o[4] = -(this.getWidth() * d)), o[5] > this.getHeight() && (o[5] = this.getHeight()), o[5] < -(this.getHeight() * d) && (o[5] = -(this.getHeight() * d)), this.requestRenderAll(), this.lastPosX = a, this.lastPosY = h;
        }
      }), this.canvas.on("mouse:up", function() {
        this.setViewportTransform(this.viewportTransform), this.isDragging = !1;
      });
    });
    c(this, "_setImageSrc", async (e, i) => new Promise((t, s) => {
      e.setSrc(
        i,
        function(n) {
          n.set({
            originX: "center",
            originY: "center"
          }), e ? t(e) : s("image src not set");
        },
        { crossOrigin: "anonymous" }
      );
    }));
    c(this, "_createNode", async (e, i) => {
      i = i || w;
      let t = new fabric.Image(i, {
        lockScalingFlip: !0,
        crossOrigin: "Anonymous"
      });
      t = await this._setImageSrc(t, i), t.scale(64 * 2 / t.width);
      const s = new fabric.Circle({
        radius: 64,
        originX: "center",
        originY: "center",
        // Image scaling is applied to the clip path, so we need to invert it
        scaleX: 1 / t.scaleX,
        scaleY: 1 / t.scaleY
      });
      t.set({
        clipPath: s
      });
      const n = new fabric.Text(e, {
        fontSize: 18,
        originX: "center",
        originY: "center",
        fontWeight: "bold",
        top: t.getScaledHeight() / 2 + 18
      });
      return new u([t, n], {
        originX: "center",
        originY: "center",
        selectable: !1,
        isNode: !0
      });
    });
    c(this, "_drawPartnerLine", (e, i, t) => {
      const s = e.getCenterPoint(), n = i.getCenterPoint();
      return new fabric.Line(
        [
          s.x + 64,
          s.y - 64 / 2,
          n.x - 64,
          n.y - 64 / 2
        ],
        {
          ...g,
          strokeDashArray: t ? [] : [5, 5]
        }
      );
    });
    c(this, "_drawParentLine", (e, i) => {
      var n;
      let t;
      return e instanceof fabric.Line ? (t = e.getCenterPoint(), i || (t = t.add(
        // @ts-ignore
        new fabric.Point(
          (e.x2 - e.x1) / 2 - 64,
          0
        )
      ))) : t = (n = e._object) == null ? void 0 : n.getCenterPoint(), new fabric.Line(
        [
          t.x,
          t.y,
          t.x,
          t.y + 200
        ],
        {
          ...g,
          // @ts-ignore
          strokeDashArray: e instanceof fabric.Line ? [] : [5, 5]
        }
      );
    });
    c(this, "_drawChildLine", (e, i) => {
      const s = e._object.getCenterPoint(), n = i.strokeWidth ? i.strokeWidth : 0, o = new fabric.Line(
        [
          i.x2 + (i.x2 > s.x ? n : 0),
          i.y2,
          s.x,
          i.y2
        ],
        g
      ), r = new fabric.Line(
        [
          o.x2,
          o.y2,
          s.x,
          s.y - 64 - 18
        ],
        g
      );
      e._childLine = new fabric.Group([o, r], {
        selectable: !1
      }), this.canvas.add(e._childLine);
    });
    c(this, "_drawNode", async (e) => {
      const i = this.canvas.getCenter(), t = await this._createNode(e.name, e.image);
      t.on("mousedown", () => {
        e.onClick && e.onClick(e);
      }), e._object = t;
      const s = e.relationships;
      let n = i.left;
      const o = 150 * (e.generation + 1) + e.generation * 200;
      if (t.set({ left: n, top: o }), this.canvas.add(t), s && s.length > 0) {
        s.sort((r, a) => r.isMarried && !a.isMarried ? -1 : !r.isMarried && a.isMarried ? 1 : 0);
        for (const r of e.relationships) {
          if (r.partner) {
            const a = await this._createNode(
              r.partner.name,
              r.partner.image
            );
            a.on("mousedown", () => {
              var h;
              (h = r.partner) != null && h.onClick && r.partner.onClick(r.partner);
            }), r.partner._object = a, a.set({ left: n, top: o }), this.canvas.add(a);
          }
          if (r.children && r.children.length > 0)
            for (const a of r.children)
              await this._drawNode(a);
        }
      }
    });
    c(this, "_groupNodes", (e, i) => {
      e[i.generation] ? e[i.generation].push(i._object) : e[i.generation] = [i._object], i.relationships && e[i.generation].push(
        ...i.relationships.map(
          (t) => {
            var s;
            return (s = t.partner) == null ? void 0 : s._object;
          }
        )
      ), i.relationships && i.relationships.forEach((t) => {
        t.children && t.children.forEach((s) => {
          this._groupNodes(e, s);
        });
      });
    });
    c(this, "_positionNodes", () => {
      let e = [];
      this._groupNodes(e, this.root);
      const i = this.canvas.getCenter();
      e.forEach((t) => {
        const s = t.length * t[0].getBoundingRect().width + (t.length - 1) * 150;
        let n = i.left - s / 2;
        t.forEach((o) => {
          o && o.set({ left: n }), n += (o ? o.getBoundingRect().width : 0) + 150;
        });
      });
    });
    c(this, "_drawPartnerRelations", (e) => {
      const i = e.relationships;
      if (i && i.length > 0) {
        for (const t of i)
          if (t.partner && (t._relation = this._drawPartnerLine(
            e._object,
            t.partner._object,
            t.isMarried
          ), this.canvas.add(t._relation)), t.children && t.children.length > 0)
            for (const s of t.children)
              this._drawPartnerRelations(s);
      }
    });
    c(this, "_drawChildRelations", (e) => {
      const i = e.relationships;
      if (i && i.length > 0) {
        for (const t of i)
          if (t.children && t.children.length > 0) {
            t._parentLine = this._drawParentLine(
              t._relation ? t._relation : e,
              t.partner ? i.indexOf(t) === 0 : void 0
            ), this.canvas.add(t._parentLine);
            for (const s of t.children)
              this._drawChildRelations(s), this._drawChildLine(s, t._parentLine);
          }
      }
    });
    c(this, "_bringNodesToFront", () => {
      this.canvas.getObjects().forEach((e) => {
        e instanceof u && e.bringToFront();
      });
    });
    c(this, "drawTree", async () => {
      await this._drawNode(this.root), this._positionNodes(), this._drawPartnerRelations(this.root), this._drawChildRelations(this.root), this._bringNodesToFront(), this.canvas.renderAll();
    });
    this.root = e, this.canvas = this._createCanvas(i), this._setupCanvas();
  }
}
export {
  m as default
};
