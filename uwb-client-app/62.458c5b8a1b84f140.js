"use strict";(self.webpackChunkuwb_client_app=self.webpackChunkuwb_client_app||[]).push([[62],{62:(K,f,i)=>{i.r(f),i.d(f,{BackgroundsModule:()=>x});var w=i(6106),D=i(6208),I=i(2125),s=i(6223),e=i(9291),d=i(8193),b=i(1321),h=i(8892),m=i(7966),c=i(3999),S=i(5969),v=i(7477),k=i(2435),C=i(7571),U=i(6717),B=i(7397),y=i(6861),z=i(6814);function T(o,l){1&o&&e._UZ(0,"uwb-input-warn",9),2&o&&e.Q6J("minLength",2)("maxLength",50)}function L(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"uwb-form-control",2)(1,"uwb-file-upload",10),e.NdJ("emitSelectItem",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.onBackgroundSelected(a))})("emitUploadedItems",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.onBackgroundUploaded(a))}),e.qZA()()}2&o&&(e.Q6J("styleClass","col-12"),e.xp6(1),e.Q6J("showUploadButton",!1)("showCancelButton",!1)("urlPath","background/upload-file")("fileSize",1e9))}let _=(()=>{class o{constructor(t,n,a,r,u,g,p){this.formBuilder=t,this.ref=n,this.config=a,this.clientsService=r,this.backgroundsService=u,this.toastService=g,this.translateService=p,this.treeSelectItems=[],this.edit=!1}ngOnInit(){this.loadPageData(),this.loadFormGroup(),this.loadOrganizationUnits()}loadPageData(){this.edit=this.config.data.edit,this.selectedBackground=this.config.data.selectedBackground,this.pageSelectedOrganizationUnit=this.config.data.selectedOrganizationUnit}loadFormGroup(){this.formGroup=this.formBuilder.group({name:[{value:null,disabled:!1},[s.kI.required,s.kI.minLength(2),s.kI.maxLength(50)]],organizationUnitId:[{value:null,disabled:!1},[s.kI.required]]}),this.edit&&this.formGroup.patchValue({name:this.selectedBackground?.name,organizationUnitId:null})}loadOrganizationUnits(){this.clientsService.findTree().subscribe(t=>{if(this.treeSelectItems=t.body??[],this.edit){const n=this.clientsService.findByIdFromUnits(this.treeSelectItems[0],this.selectedBackground?.organizationUnitId);this.formGroup?.get("organizationUnitId")?.setValue(n)}else{const n=this.clientsService.findByIdFromUnits(this.treeSelectItems[0],this.pageSelectedOrganizationUnit?.id);this.formGroup?.get("organizationUnitId")?.setValue(n)}})}onBackgroundSelected(t){this.uploadedBackground=t}onBackgroundUploaded(t){this.uploadedFile=t,console.log(this.uploadedFile)}onSave(){let t=this.formGroup?.getRawValue();t={...t,fileName:this.uploadedBackground?.fileName,fileSize:this.uploadedBackground?.fileSize,organizationUnitId:t.organizationUnitId?.data.id,scale:1},this.edit?(t.id=this.selectedBackground?.id,this.backgroundsService.update(t).subscribe({next:()=>{this.toastService.showSuccessToast({summary:this.translateService.instant("global.toast.header.success"),detail:this.translateService.instant("background.dialog.editSuccess")}),this.onCloseDialog(!0)},error:()=>{this.toastService.showErrorToast({summary:this.translateService.instant("global.toast.header.error"),detail:this.translateService.instant("background.dialog.editError")})}})):this.backgroundsService.uploadFile(this.uploadedFile).subscribe({next:()=>{this.backgroundsService.create(t).subscribe({next:()=>{this.toastService.showSuccessToast({summary:this.translateService.instant("global.toast.header.success"),detail:this.translateService.instant("background.dialog.addSuccess")}),this.onCloseDialog(!0)},error:()=>{this.toastService.showErrorToast({summary:this.translateService.instant("global.toast.header.error"),detail:this.translateService.instant("background.dialog.addError")})}})},error:()=>{this.toastService.showErrorToast({summary:this.translateService.instant("global.toast.header.error"),detail:this.translateService.instant("background.dialog.addError")})}})}onCloseDialog(t){this.ref.close(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(d.E7),e.Y36(d.S),e.Y36(b.a),e.Y36(h.s),e.Y36(m.k),e.Y36(c.sK))},o.\u0275cmp=e.Xpm({type:o,selectors:[["uwb-backgrounds-dialog"]],decls:13,vars:13,consts:[[3,"formGroup","ngSubmit","cancel"],["form-body",""],[3,"styleClass"],[1,"p-float-label"],["pInputText","","id","name","formControlName","name","minlength","2","maxlength","50"],["htmlFor","name"],[3,"minLength","maxLength",4,"ngIf"],["formControlName","organizationUnitId",3,"options","optionLabel","label"],[3,"styleClass",4,"ngIf"],[3,"minLength","maxLength"],[3,"showUploadButton","showCancelButton","urlPath","fileSize","emitSelectItem","emitUploadedItems"]],template:function(t,n){if(1&t&&(e.TgZ(0,"uwb-form",0),e.NdJ("ngSubmit",function(){return n.onSave()})("cancel",function(){return n.onCloseDialog()}),e.TgZ(1,"uwb-form-grid",1)(2,"uwb-form-control",2)(3,"span",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.YNc(8,T,1,2,"uwb-input-warn",6),e.qZA(),e.TgZ(9,"uwb-form-control",2),e._UZ(10,"uwb-tree-select",7),e.ALo(11,"translate"),e.qZA(),e.YNc(12,L,2,5,"uwb-form-control",8),e.qZA()()),2&t){let a;e.Q6J("formGroup",n.formGroup),e.xp6(2),e.Q6J("styleClass","col-12"),e.xp6(4),e.Oqu(e.lcZ(7,9,"background.name")),e.xp6(2),e.Q6J("ngIf",(null==n.formGroup||null==(a=n.formGroup.get("name"))?null:a.touched)&&(null==n.formGroup||null==(a=n.formGroup.get("name"))?null:a.invalid)),e.xp6(1),e.Q6J("styleClass","col-12"),e.xp6(1),e.s9C("label",e.lcZ(11,11,"background.organizationUnit")),e.Q6J("options",n.treeSelectItems)("optionLabel","name"),e.xp6(2),e.Q6J("ngIf",!n.edit)}},dependencies:[S.o,v.U,k.A,C.c,U.T,B.s,y.z,s.Fj,s.JJ,s.JL,s.wO,s.nD,z.O5,s.sg,s.u,c.X$]}),o})();var O=i(4112);let J=(()=>{class o{constructor(t,n,a,r,u,g){this.ref=t,this.config=n,this.formBuilder=a,this.backgroundsService=r,this.toastService=u,this.translateService=g,this.edit=!1,this.mapLineLength=void 0}ngOnInit(){this.loadPageData(),this.loadFormGroup()}loadPageData(){this.selectedBackground=this.config.data.selectedBackground,this.edit=this.config.data.edit}loadFormGroup(){this.formGroup=this.formBuilder.group({realValue:[{value:null,disabled:!0},[s.kI.required]]}),this.edit&&this.formGroup.patchValue({realValue:this.selectedBackground?.name})}onDrawLineStringLengthChange(t){this.mapLineLength=t,this.formGroup?.get("realValue")?.enable()}onSave(){const t=this.formGroup?.getRawValue(),n=Math.floor(this.mapLineLength/t.realValue*100)/100;this.selectedBackground.scale=n,this.backgroundsService.update(this.selectedBackground).subscribe({next:()=>{this.toastService.showSuccessToast({summary:this.translateService.instant("global.toast.header.success"),detail:this.translateService.instant("background.dialog.editScaleSuccess")}),this.onCloseDialog(!0)},error:()=>{this.toastService.showErrorToast({summary:this.translateService.instant("global.toast.header.error"),detail:this.translateService.instant("background.dialog.editScaleError")})}})}onCloseDialog(t){this.ref.close(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.E7),e.Y36(d.S),e.Y36(s.qu),e.Y36(h.s),e.Y36(m.k),e.Y36(c.sK))},o.\u0275cmp=e.Xpm({type:o,selectors:[["uwb-calibrate-dialog"]],decls:10,vars:8,consts:[[1,"calibrate-map"],[1,"w-full",3,"background","drawableLineString","emitLengthLineString"],[3,"formGroup","disabledButtonOption","ngSubmit","cancel"],["form-body",""],[3,"styleClass"],[1,"p-float-label"],["pInputText","","id","realValue","type","number","formControlName","realValue"],["htmlFor","realValue"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"uwb-map",1),e.NdJ("emitLengthLineString",function(r){return n.onDrawLineStringLengthChange(r)}),e.qZA(),e.TgZ(2,"uwb-form",2),e.NdJ("ngSubmit",function(){return n.onSave()})("cancel",function(){return n.onCloseDialog()}),e.TgZ(3,"uwb-form-grid",3)(4,"uwb-form-control",4)(5,"span",5),e._UZ(6,"input",6),e.TgZ(7,"label",7),e._uU(8),e.ALo(9,"translate"),e.qZA()()()()()()),2&t&&(e.xp6(1),e.Q6J("background",null==n.selectedBackground?null:n.selectedBackground.fullPath)("drawableLineString",!0),e.xp6(1),e.Q6J("formGroup",n.formGroup)("disabledButtonOption",void 0===n.mapLineLength),e.xp6(2),e.Q6J("styleClass","col-12 flex justify-content-center"),e.xp6(4),e.Oqu(e.lcZ(9,6,"background.realValue")))},dependencies:[S.o,v.U,k.A,C.c,O.G,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,c.X$],styles:[".calibrate-map[_ngcontent-%COMP%]{display:grid;grid-template-rows:calc(100vh - 500px) 200px}"]}),o})();var Z=i(5083),A=i(5630),G=i(6641),Y=i(1407),F=i(9185),E=i(4089),V=i(7378),Q=i(9496);const N=[{path:"backgrounds",component:(()=>{class o{constructor(t,n,a,r,u,g,p,P,M,H){this.backgroundsService=t,this.columnService=n,this.dialogService=a,this.translateService=r,this.confirmDialogService=u,this.toastService=g,this.clientsService=p,this.authorityService=P,this.arrayBufferService=M,this.sizeScreenService=H,this.columns=[],this.backgrounds=[],this.treeSelectItems=[],this.loading=!1,this.smallScreen=!1,this.mobileScreen=!1}ngOnInit(){this.sizeScreenService.smallScreen$.subscribe(t=>{this.smallScreen=t}),this.sizeScreenService.mobileScreen$.subscribe(t=>{this.mobileScreen=t}),this.loading=!0,this.userOrganizationUnitId=this.authorityService.getUserOrganizationUnitId(),this.columns=this.columnService.getBackgroundColumns(),this.loadOrganizationUnits(),this.loadBackgrounds()}loadOrganizationUnits(){this.clientsService.findTree().subscribe(t=>{this.treeSelectItems=t.body??[],this.treeSelectItemSelected=this.clientsService.findByIdFromUnits(this.treeSelectItems[0],this.userOrganizationUnitId),this.selectedOrganizationUnit=this.treeSelectItemSelected.data,this.handleSelectedOrganizationUnit=this.treeSelectItemSelected.data})}loadBackgrounds(){this.loading=!0,this.backgroundsService.findAllByUserOrganizationUnit(this.selectedOrganizationUnit?.id??this.userOrganizationUnitId).subscribe(t=>{this.backgrounds=t.body??[],this.backgrounds.forEach(n=>n.fullPath=this.arrayBufferService.convertImage(n.pathArrayBuffer)),this.loading=!1})}onOrganizationUnitSelect(t){this.selectedOrganizationUnit?.id!==t.id&&(this.selectedOrganizationUnit=t,this.handleSelectedOrganizationUnit=t,this.treeSelectItemSelected=this.clientsService.findByIdFromUnits(this.treeSelectItems[0],this.selectedOrganizationUnit.id),this.selectedBackground=void 0,this.loadBackgrounds())}onBackgroundSelect(t){this.selectedBackground=t||void 0}openDialog(t=!1){this.dialogService.open(_,{header:this.translateService.instant(t?"global.dialog.editHeader":"global.dialog.addHeader"),data:{edit:t,selectedBackground:this.selectedBackground,selectedOrganizationUnit:this.selectedOrganizationUnit},width:this.smallScreen?"95%":"40%"}).onClose.subscribe(a=>this.handleDialogResponse(a))}openCalibrateBackgroundDialog(){this.dialogService.open(J,{header:this.translateService.instant("global.dialog.calibrateHeader"),data:{selectedBackground:this.selectedBackground},width:"90%"}).onClose.subscribe(n=>this.handleDialogResponse(n))}openDeleteDialog(){this.confirmDialogService.openDeleteDialog({},t=>{t&&this.handleDeleteDialog()})}handleDialogResponse(t){t&&(this.selectedBackground=void 0,this.loadBackgrounds())}handleDeleteDialog(){this.backgroundsService.delete(this.selectedBackground?.id).subscribe({next:()=>{this.toastService.showSuccessToast({summary:this.translateService.instant("global.toast.header.success"),detail:this.translateService.instant("background.dialog.deleteSuccess")}),this.handleDialogResponse(!0)},error:t=>{this.toastService.showErrorToast({summary:this.translateService.instant("global.toast.header.error"),detail:this.translateService.instant("background.dialog.deleteError")})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.s),e.Y36(Z.w),e.Y36(d.xA),e.Y36(c.sK),e.Y36(A.D),e.Y36(m.k),e.Y36(b.a),e.Y36(G.g),e.Y36(Y.A),e.Y36(F.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["uwb-backgrounds"]],decls:8,vars:19,consts:[[1,"single_table_with_5buttons"],[3,"columns","values","loading","showHeaderSelect","selectionChange"],[3,"treeSelectValue","options","optionLabel","floatLabel","placeholder","modelChange"],[1,"buttons_container_center"],[3,"styleClass","disabledEditAndDeleteButton","emitAddClick","emitEditClick","emitDeleteClick"],[1,"col","px-2",3,"disabled","icon","label","styleClass","onClick"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"uwb-table",1),e.NdJ("selectionChange",function(r){return n.onBackgroundSelect(r)}),e.TgZ(2,"uwb-tree-select",2),e.NdJ("modelChange",function(r){return n.onOrganizationUnitSelect(r)}),e.ALo(3,"translate"),e.qZA()(),e.TgZ(4,"div",3)(5,"uwb-footer-buttons",4),e.NdJ("emitAddClick",function(){return n.openDialog()})("emitEditClick",function(){return n.openDialog(!0)})("emitDeleteClick",function(){return n.openDeleteDialog()}),e.TgZ(6,"p-button",5),e.NdJ("onClick",function(){return n.openCalibrateBackgroundDialog()}),e.ALo(7,"translate"),e.qZA()()()()),2&t&&(e.xp6(1),e.Q6J("columns",n.columns)("values",n.backgrounds)("loading",n.loading)("showHeaderSelect",!0),e.xp6(1),e.Q6J("treeSelectValue",n.treeSelectItemSelected)("options",n.treeSelectItems)("optionLabel","name")("floatLabel",!1)("placeholder",e.lcZ(3,15,"background.organizationUnit")),e.xp6(3),e.Q6J("styleClass","col px-2")("disabledEditAndDeleteButton",void 0===n.selectedBackground),e.xp6(1),e.Q6J("disabled",void 0===n.selectedBackground)("icon",n.mobileScreen?"pi pi-arrows-h":"")("label",n.mobileScreen?"":e.lcZ(7,17,"global.buttons.calibrate"))("styleClass",n.mobileScreen?"ui-button_size_100":n.smallScreen?"ui-button_size_125":"ui-button_size_175"))},dependencies:[E.zx,V.L,Q.EC,B.s,c.X$]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[w.K,D.m,I.Bz.forChild(N)]}),o})()}}]);