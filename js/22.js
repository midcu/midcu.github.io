(self.webpackChunkva_auth_main=self.webpackChunkva_auth_main||[]).push([[22],{8387:(g,I,C)=>{"use strict";C.d(I,{Z:()=>W});const W="data:text/css;charset=utf-8;base64,LyoqIOmhtumDqOagj+eahOminOiJsuS4u+mimCAqLw0KLnZhLW1haW4taGVhZGVyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjVlOw0KICAgIGNvbG9yOiAjZmZmOw0KICAgIGZvbnQtc2l6ZTogMTJweDsNCiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNWI1ZTsNCn0NCg0KLnZhLW1haW4taGVhZGVyOmJlZm9yZSB7DQogICAgY29udGVudDogIiI7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KICAgIHRvcDogMHB4Ow0KICAgIHJpZ2h0OiAwcHg7DQogICAgd2lkdGg6IDIwMHB4Ow0KICAgIGhlaWdodDogNjBweDsNCiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7DQogICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNzYsIDc4LCAwLjk1KTsNCn0NCi52YS1tYWluLWhlYWRlcjphZnRlciB7DQogICAgY29udGVudDogIiI7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KICAgIHRvcDogMHB4Ow0KICAgIHJpZ2h0OiAyMDBweDsNCiAgICB3aWR0aDogMHB4Ow0KICAgIGhlaWdodDogMHB4Ow0KICAgIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7DQogICAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7DQogICAgYm9yZGVyLXJpZ2h0OiAzMHB4IHNvbGlkIHJnYmEoMzAsIDc2LCA3OCwgMC45NSk7DQogICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCByZ2JhKDMwLCA3NiwgNzgsIDAuNTUpOw0KICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTsNCiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsNCn0NCg0KLnZhLW1haW4taGVhZGVyLW5hbWUgew0KICAgIGNvbG9yOiAjZmZmOw0KfQ0KDQovKiog5L6n6L655qCP55qE6aKc6Imy5Li76aKYICovDQoudmEtbWFpbi1hc2lkZSB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWI1ZTsNCiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNWI1ZSwgIzFlNGM0ZSk7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZSBpLA0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbSBpIHsNCiAgICBjb2xvcjogI2VlZTsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbS5pcy1hY3RpdmUgaSB7DQogICAgY29sb3I6IHJnYmEoNjcsMTU4LDI1NSwuOCkgIWltcG9ydGFudDsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbS5pcy1hY3RpdmUgew0KICAgIGNvbG9yOiByZ2JhKDY3LDE1OCwyNTUsLjgpICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5LCAxMjQsIDEyOCwgMC41NSkgIWltcG9ydGFudDsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbSwgDQoudmEtbWFpbi1hc2lkZSAuZWwtc3VibWVudV9fdGl0bGUgew0KICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbTpmb2N1cywgDQoudmEtbWFpbi1hc2lkZSAuZWwtbWVudS1pdGVtOmhvdmVyLCANCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZTpmb2N1cywgDQoudmEtbWFpbi1hc2lkZSAuZWwtc3VibWVudV9fdGl0bGU6aG92ZXIgew0KICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDEyNCwgMTI4LCAwLjU1KSAhaW1wb3J0YW50Ow0KfQ0KDQovKiDooajmoLzkuLvpopggKi8NCi52YS10YWJsZS10aGVhZC10aGVtZSB7DQogICAgYmFja2dyb3VuZDogI2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGJhY2tncm91bmQtY29sb3I6I2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGNvbG9yOiM2NjY2NjYgIWltcG9ydGFudDsNCiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjFmNiAhaW1wb3J0YW50Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIHRoZWFkIHRoLCAuZGVtby10YWJsZS10aGVhZCB0aGVhZCB0cnsNCiAgICBiYWNrZ3JvdW5kOiAjZWVmMWY2ICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjojZWVmMWY2ICFpbXBvcnRhbnQ7DQogICAgY29sb3I6IzY2NjY2NiAhaW1wb3J0YW50Ow0KICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMWY2ICFpbXBvcnRhbnQ7DQp9DQoudmEtdGFibGUtdGhlYWQtdGhlbWUgdGhlYWQgdGg6bnRoLWNoaWxkKDEpIHsNCiAgICBib3JkZXItcmFkaXVzOiA2cHggMHB4IDBweCAwcHg7DQp9DQoudmEtdGFibGUtdGhlYWQtdGhlbWUgdGhlYWQgdGg6bnRoLWxhc3QtY2hpbGQoMikgew0KICAgIGJvcmRlci1yYWRpdXM6IDBweCA2cHggMHB4IDBweDsNCn0NCi52YS10YWJsZS10aGVhZC10aGVtZSB0aGVhZCB0aDpudGgtbGFzdC1jaGlsZCgxKSB7DQogICAgYm9yZGVyLXJhZGl1czogMHB4IDZweCAwcHggMHB4Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIC5lbC10YWJsZV9fZW1wdHktdGV4dCB7DQogICAgbGluZS1oZWlnaHQ6IDM5NnB4IWltcG9ydGFudDsNCiAgICB3aWR0aDogNTAlOw0KICAgIGNvbG9yOiAjNjY2NjY2Ow0KICAgIGhlaWdodDogMjIwcHg7DQp9"},5751:(g,I,C)=>{"use strict";C.d(I,{Z:()=>W});const W="data:text/css;charset=utf-8;base64,LyoqIOmhtumDqOagj+eahOminOiJsuS4u+mimCAqLw0KLnZhLW1haW4taGVhZGVyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyOTNBOw0KICAgIGNvbG9yOiAjZmZmOw0KICAgIGZvbnQtc2l6ZTogMTJweDsNCiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE0MjkzQTsNCn0NCg0KLnZhLW1haW4taGVhZGVyLW5hbWUgew0KICAgIGNvbG9yOiAjZmZmOw0KfQ0KDQovKiog5L6n6L655qCP55qE6aKc6Imy5Li76aKYICovDQoudmEtbWFpbi1hc2lkZSB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MmU0NDsNCiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzE0MmU0NCwgIzI3NEI2OSk7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZSBpLA0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbSBpIHsNCiAgICBjb2xvcjogI2VlZTsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbS5pcy1hY3RpdmUgaSB7DQogICAgY29sb3I6ICM0MmE1ZjUgIWltcG9ydGFudDsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbS5pcy1hY3RpdmUgew0KICAgIGNvbG9yOiAjNDJhNWY1ICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDMwLCA3NiwgNzgsIDAuNTUpICFpbXBvcnRhbnQ7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1tZW51LWl0ZW0sIA0KLnZhLW1haW4tYXNpZGUgLmVsLXN1Ym1lbnVfX3RpdGxlIHsNCiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50Ow0KICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1tZW51LWl0ZW06Zm9jdXMsIA0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbTpob3ZlciwgDQoudmEtbWFpbi1hc2lkZSAuZWwtc3VibWVudV9fdGl0bGU6Zm9jdXMsIA0KLnZhLW1haW4tYXNpZGUgLmVsLXN1Ym1lbnVfX3RpdGxlOmhvdmVyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDsNCn0NCg0KLyog6KGo5qC85Li76aKYICovDQoudmEtdGFibGUtdGhlYWQtdGhlbWUgew0KICAgIGJhY2tncm91bmQ6ICNlZWYxZjYgIWltcG9ydGFudDsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWYxZjYgIWltcG9ydGFudDsNCiAgICBjb2xvcjojNjY2NjY2ICFpbXBvcnRhbnQ7DQogICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWYxZjYgIWltcG9ydGFudDsNCn0NCi52YS10YWJsZS10aGVhZC10aGVtZSB0aGVhZCB0aCwgLmRlbW8tdGFibGUtdGhlYWQgdGhlYWQgdHJ7DQogICAgYmFja2dyb3VuZDogI2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGJhY2tncm91bmQtY29sb3I6I2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGNvbG9yOiM2NjY2NjYgIWltcG9ydGFudDsNCiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjFmNiAhaW1wb3J0YW50Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIHRoZWFkIHRoOm50aC1jaGlsZCgxKSB7DQogICAgYm9yZGVyLXJhZGl1czogNnB4IDBweCAwcHggMHB4Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIHRoZWFkIHRoOm50aC1sYXN0LWNoaWxkKDIpIHsNCiAgICBib3JkZXItcmFkaXVzOiAwcHggNnB4IDBweCAwcHg7DQp9DQoudmEtdGFibGUtdGhlYWQtdGhlbWUgdGhlYWQgdGg6bnRoLWxhc3QtY2hpbGQoMSkgew0KICAgIGJvcmRlci1yYWRpdXM6IDBweCA2cHggMHB4IDBweDsNCn0NCi52YS10YWJsZS10aGVhZC10aGVtZSAuZWwtdGFibGVfX2VtcHR5LXRleHQgew0KICAgIGxpbmUtaGVpZ2h0OiAzOTZweCFpbXBvcnRhbnQ7DQogICAgd2lkdGg6IDUwJTsNCiAgICBjb2xvcjogIzY2NjY2NjsNCiAgICBoZWlnaHQ6IDIyMHB4Ow0KfQ=="},1309:(g,I,C)=>{"use strict";C.d(I,{Z:()=>W});const W="data:text/css;charset=utf-8;base64,LyoqIOmhtumDqOagj+eahOminOiJsuS4u+mimCAqLw0KLnZhLW1haW4taGVhZGVyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwNzIzOw0KICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTsNCiAgICBmb250LXNpemU6IDEycHg7DQogICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwOTA3MjM7DQogICAgcG9zaXRpb246IHJlbGF0aXZlOw0KfQ0KDQoudmEtbWFpbi1oZWFkZXI6YmVmb3JlIHsNCiAgICBjb250ZW50OiAiIjsNCiAgICBwb3NpdGlvbjogYWJzb2x1dGU7DQogICAgYm90dG9tOiAyMHB4Ow0KICAgIHJpZ2h0OiA5MHB4Ow0KICAgIHdpZHRoOiAxMDBweDsNCiAgICBoZWlnaHQ6IDEwMHB4Ow0KICAgIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7DQogICAgYmFja2dyb3VuZDogcmdiYSgyMiwgMTIsIDQzLCAwLjk1KTsNCn0NCi52YS1tYWluLWhlYWRlcjphZnRlciB7DQogICAgY29udGVudDogIiI7DQogICAgcG9zaXRpb246IGFic29sdXRlOw0KICAgIGJvdHRvbTogMjBweDsNCiAgICByaWdodDogMjMwcHg7DQogICAgd2lkdGg6IDMwcHg7DQogICAgaGVpZ2h0OiAzMHB4Ow0KICAgIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7DQogICAgYmFja2dyb3VuZDogcmdiYSg4LCAxNCwgNDcsIDAuOTUpOw0KfQ0KDQoudmEtbWFpbi1oZWFkZXItbmFtZSB7DQogICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpOw0KfQ0KDQovKiog5L6n6L655qCP55qE6aKc6Imy5Li76aKYICovDQoudmEtbWFpbi1hc2lkZSB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDcyMzsNCiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzA5MDcyMywgIzA5MDcyMyk7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZSBpLA0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbSBpIHsNCiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1tZW51LWl0ZW0uaXMtYWN0aXZlIGkgew0KICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7DQp9DQoNCi52YS1tYWluLWFzaWRlIC5lbC1tZW51LWl0ZW0uaXMtYWN0aXZlIHsNCiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50Ow0KICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50Ow0KfQ0KDQoudmEtbWFpbi1hc2lkZSAuZWwtbWVudS1pdGVtLCANCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZSB7DQogICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsNCn0NCg0KLnZhLW1haW4tYXNpZGUgLmVsLW1lbnUtaXRlbTpmb2N1cywgDQoudmEtbWFpbi1hc2lkZSAuZWwtbWVudS1pdGVtOmhvdmVyLCANCi52YS1tYWluLWFzaWRlIC5lbC1zdWJtZW51X190aXRsZTpmb2N1cywgDQoudmEtbWFpbi1hc2lkZSAuZWwtc3VibWVudV9fdGl0bGU6aG92ZXIgew0KICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50Ow0KfQ0KDQovKiDooajmoLzkuLvpopggKi8NCi52YS10YWJsZS10aGVhZC10aGVtZSB7DQogICAgYmFja2dyb3VuZDogI2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGJhY2tncm91bmQtY29sb3I6I2VlZjFmNiAhaW1wb3J0YW50Ow0KICAgIGNvbG9yOiM2NjY2NjYgIWltcG9ydGFudDsNCiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjFmNiAhaW1wb3J0YW50Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIHRoZWFkIHRoLCAuZGVtby10YWJsZS10aGVhZCB0aGVhZCB0cnsNCiAgICBiYWNrZ3JvdW5kOiAjZWVmMWY2ICFpbXBvcnRhbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjojZWVmMWY2ICFpbXBvcnRhbnQ7DQogICAgY29sb3I6IzY2NjY2NiAhaW1wb3J0YW50Ow0KICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMWY2ICFpbXBvcnRhbnQ7DQp9DQoudmEtdGFibGUtdGhlYWQtdGhlbWUgdGhlYWQgdGg6bnRoLWNoaWxkKDEpIHsNCiAgICBib3JkZXItcmFkaXVzOiA2cHggMHB4IDBweCAwcHg7DQp9DQoudmEtdGFibGUtdGhlYWQtdGhlbWUgdGhlYWQgdGg6bnRoLWxhc3QtY2hpbGQoMikgew0KICAgIGJvcmRlci1yYWRpdXM6IDBweCA2cHggMHB4IDBweDsNCn0NCi52YS10YWJsZS10aGVhZC10aGVtZSB0aGVhZCB0aDpudGgtbGFzdC1jaGlsZCgxKSB7DQogICAgYm9yZGVyLXJhZGl1czogMHB4IDZweCAwcHggMHB4Ow0KfQ0KLnZhLXRhYmxlLXRoZWFkLXRoZW1lIC5lbC10YWJsZV9fZW1wdHktdGV4dCB7DQogICAgbGluZS1oZWlnaHQ6IDM5NnB4IWltcG9ydGFudDsNCiAgICB3aWR0aDogNTAlOw0KICAgIGNvbG9yOiAjNjY2NjY2Ow0KICAgIGhlaWdodDogMjIwcHg7DQp9"},22:(g,I,C)=>{"use strict";C.r(I),C.d(I,{default:()=>t});var W=function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("va-main-content",[C("el-form",{ref:"form",staticStyle:{"margin-top":"10px",background:"#ffffff",padding:"10px"},attrs:{model:g.form,"label-width":"100px"}},[C("el-form-item",{attrs:{label:"菜单栏样式"}},[C("el-radio-group",{attrs:{size:"small"},model:{value:g.form.layout,callback:function(I){g.$set(g.form,"layout",I)},expression:"form.layout"}},g._l(g.layoutType,(function(I){return C("el-radio-button",{key:I.value,attrs:{label:I.value}},[g._v(g._s(I.label))])})),1)],1),g._v(" "),C("el-form-item",{attrs:{label:"主题样式"}},[C("el-radio-group",{attrs:{size:"small"},model:{value:g.form.theme,callback:function(I){g.$set(g.form,"theme",I)},expression:"form.theme"}},g._l(g.themeType,(function(I){return C("el-radio-button",{key:I.value,attrs:{label:I.value}},[g._v(g._s(I.label))])})),1)],1)],1)],1)};W._withStripped=!0;const b={name:"va-setting",data:function(){return{form:{layout:this.$store.state.props.layoutName,theme:this.$store.state.props.themeUrl},layoutType:[{label:"侧边栏菜单",value:"va-left-menu-page"},{label:"顶部栏菜单",value:"va-top-menu-page"}],themeType:[{label:"默认主题",value:""},{label:"主题1",value:C(8387).Z},{label:"主题2",value:C(5751).Z},{label:"主题3",value:C(1309).Z}]}},watch:{"form.layout":function(){this.$store.commit("SET_LAYOUT_NAME",this.form.layout)},"form.theme":function(){this.$store.commit("SET_THEME_URL",this.form.theme)}},mounted:function(){console.log(this.$store.state.props.themeUrl)},methods:{}};var l=(0,C(1900).Z)(b,W,[],!1,null,null,null);l.options.__file="src/views/system/setting.vue";const t=l.exports}}]);