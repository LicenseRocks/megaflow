(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{385:function(module){module.exports=JSON.parse('{"steps":[{"rows":[{"message":"This is your workflow for tokenizing images. We can vary the flow to support your desired license use case."},{"fields":[{"name":"document","type":"fileUpload","required":"You must upload at least 1 document"}]},{"label":"Storage method","fields":[{"name":"storageOption","type":"radio","options":[{"label":"S3","value":"s3"},{"label":"Arweave (Permanent Storage)","value":"arweave"}],"defaultValue":"s3"}]}],"title":"Upload documents"},{"rows":[{"label":"Title","fields":[{"name":"title","required":"Title is required","placeholder":"Provide product name"}]},{"label":"Description","fields":[{"name":"description","placeholder":"Provide product description"}]},{"label":"Credit Line","fields":[{"name":"creditLine","placeholder":"Provide product Credit Line"}]},{"label":"Price","fields":[{"min":"0.01","name":"price","type":"price","required":"Price is required","currencies":[{"sign":"€","label":"EUR (€)","value":"eur"}],"placeholder":"Price"}]},{"label":"Enable bidding?","fields":[{"name":"biddingEnabled","type":"toggleSwitch"}],"divider":true},{"label":"Enable license fee?","fields":[{"name":"licenseFee","type":"checkbox","options":[{"label":"None","value":"none"},{"label":"Creator","value":"creator"},{"label":"Donation","value":"donation"}],"required":"Fee type is required","placeholder":"Please select fee type"},{"name":"creatorFee","required":"Creator fee is required","conditions":["licenseFee:creator"],"placeholder":"1-99%"},{"name":"donationFee","required":"Donation fee is required","conditions":["licenseFee:donation"],"placeholder":"1-99%"}],"divider":true},{"label":"Enable limited print?","fields":[{"name":"limitedPrint","type":"checkbox","options":[{"label":"None","value":"none"},{"label":"Unlimited","value":"unlimited"},{"label":"Unique","value":"unique"},{"label":"Limited","value":"limited"}],"required":"Limit print is required","placeholder":"Please select print options"},{"name":"limited","required":"Limit is required","conditions":["limitedPrint:limited"],"placeholder":"Please provide number"}]}],"title":"Specify meta-data"},{"rows":[{"fields":[{"name":"terms","type":"checkbox","options":[{"label":"I have read and accept the terms of usage","value":true}],"required":"You must accept terms of usage"}]},{"fields":[{"name":"owner","type":"checkbox","options":[{"label":"I am the license owner or or legal representative in charge of the owner","value":true}],"required":"You must be the owner"}]}],"title":"Review and finalize"}]}')},394:function(module,exports,__webpack_require__){__webpack_require__(395),__webpack_require__(544),__webpack_require__(545),__webpack_require__(728),module.exports=__webpack_require__(738)},461:function(module,exports){},545:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(160);__webpack_require__(724);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{panelPosition:"right"}})},738:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(160);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(740)],module)}.call(this,__webpack_require__(739)(module))},740:function(module,exports,__webpack_require__){var map={"./stories.js":864};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=740},864:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"main",(function(){return main}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(63),index_esm=(__webpack_require__(22),__webpack_require__(31),__webpack_require__(32),__webpack_require__(140),__webpack_require__(45),__webpack_require__(68),__webpack_require__(90),__webpack_require__(39),__webpack_require__(26),__webpack_require__(57),__webpack_require__(112),__webpack_require__(27),__webpack_require__(50),__webpack_require__(46),__webpack_require__(328),__webpack_require__(59),__webpack_require__(741),__webpack_require__(742),__webpack_require__(47),__webpack_require__(21),__webpack_require__(48),__webpack_require__(33),__webpack_require__(49),__webpack_require__(34),__webpack_require__(62)),rockskit_es=__webpack_require__(7),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__(25),__webpack_require__(131);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FormField=function(_ref){var data=_ref.data,field=_ref.field,hasError=_ref.hasError,isRecurring=_ref.isRecurring,recurringIndex=_ref.recurringIndex,stepIndex=_ref.stepIndex,fieldId=_ref.fieldId,rowId=_ref.rowId,wizardData=_ref.wizardData,_useFormContext=Object(index_esm.d)(),control=_useFormContext.control,register=_useFormContext.register,defaultValue=(field.conditions,field.defaultValue),name=field.name,required=field.required,type=field.type,others=_objectWithoutProperties(field,["conditions","defaultValue","name","required","type"]),Field=function(fieldType){switch(fieldType){case"datepicker":return rockskit_es.e;case"select":return rockskit_es.r;case"borderedRadio":return rockskit_es.c;case"checkbox":return rockskit_es.d;case"radio":return rockskit_es.n;case"toggleSwitch":return rockskit_es.v;case"fileUpload":return rockskit_es.h;case"filePond":return rockskit_es.g;case"price":return rockskit_es.m;case"reactSelect":return rockskit_es.o;case"stepper":return rockskit_es.s;case"textArea":return rockskit_es.t;default:return rockskit_es.k}}(type),fieldKey="step-".concat(stepIndex,"-row-").concat(rowId,"-field-").concat(fieldId),fieldName=isRecurring?"".concat(data.name,"[").concat(recurringIndex,"].").concat(name):name,prevValue=isRecurring&&wizardData[data.name]&&wizardData[data.name][recurringIndex]?wizardData[data.name][recurringIndex][name]:wizardData[name];return react_default.a.createElement(Field,_extends({control:control,defaultValue:prevValue||defaultValue,hasError:hasError,isRequired:required,key:fieldKey,name:fieldName,register:register({required:required}),type:type},others))};FormField.displayName="FormField",FormField.propTypes={data:prop_types_default.a.shape({name:prop_types_default.a.string,recurring:prop_types_default.a.bool,rows:prop_types_default.a.arrayOf(prop_types_default.a.shape({}))}).isRequired,field:prop_types_default.a.shape({conditions:prop_types_default.a.arrayOf(prop_types_default.a.string),defaultValue:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.object]),name:prop_types_default.a.string,required:prop_types_default.a.string,type:prop_types_default.a.string}).isRequired,fieldId:prop_types_default.a.number.isRequired,hasError:prop_types_default.a.bool.isRequired,isRecurring:prop_types_default.a.bool.isRequired,recurringIndex:prop_types_default.a.number,stepIndex:prop_types_default.a.number.isRequired,wizardData:prop_types_default.a.shape({}).isRequired,rowId:prop_types_default.a.number.isRequired},FormField.defaultProps={recurringIndex:null},FormField.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{recurringIndex:{defaultValue:{value:"null",computed:!1},type:{name:"number"},required:!1,description:""},data:{type:{name:"shape",value:{name:{name:"string",required:!1},recurring:{name:"bool",required:!1},rows:{name:"arrayOf",value:{name:"shape",value:{}},required:!1}}},required:!0,description:""},field:{type:{name:"shape",value:{conditions:{name:"arrayOf",value:{name:"string"},required:!1},defaultValue:{name:"union",value:[{name:"string"},{name:"object"}],required:!1},name:{name:"string",required:!1},required:{name:"string",required:!1},type:{name:"string",required:!1}}},required:!0,description:""},fieldId:{type:{name:"number"},required:!0,description:""},hasError:{type:{name:"bool"},required:!0,description:""},isRecurring:{type:{name:"bool"},required:!0,description:""},stepIndex:{type:{name:"number"},required:!0,description:""},wizardData:{type:{name:"shape",value:{}},required:!0,description:""},rowId:{type:{name:"number"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Field.js"]={name:"FormField",docgenInfo:FormField.__docgenInfo,path:"src/components/Form/Field.js"});__webpack_require__(209),__webpack_require__(58),__webpack_require__(211),__webpack_require__(341);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var checkCondition=function(conditions,watch,wizardData){if(conditions&&0<conditions.length){var conditionValues=function(conditions,watch,wizardData){return watch(conditions.map((function(c){return c.includes(":")?_slicedToArray(c.split(":"),1)[0]:c})),wizardData)}(conditions,watch,wizardData);return conditions.some((function(c){var _conditionValues$c;if(c.includes(":")){var _conditionValues$name,_c$split4=_slicedToArray(c.split(":"),2),name=_c$split4[0],value=_c$split4[1];return conditionValues[name]===value||(null===(_conditionValues$name=conditionValues[name])||void 0===_conditionValues$name?void 0:_conditionValues$name.includes(value))}return 0<(null===(_conditionValues$c=conditionValues[c])||void 0===_conditionValues$c?void 0:_conditionValues$c.length)||!!conditionValues[c]}))}return!0};function FormRows_slicedToArray(arr,i){return function FormRows_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function FormRows_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function FormRows_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return FormRows_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FormRows_arrayLikeToArray(o,minLen)}(arr,i)||function FormRows_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function FormRows_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var StyledRow=Object(styled_components_browser_esm.a)(rockskit_es.i).withConfig({displayName:"FormRows__StyledRow",componentId:"sc-1knzxbr-0"})(["&&{label{:only-child{display:none;}}}"]),FormRows=function(_ref){var data=_ref.data,index=_ref.index,isRecurring=_ref.isRecurring,rows=_ref.rows,stepIndex=_ref.stepIndex,wizardData=_ref.wizardData,_useFormContext=Object(index_esm.d)(),errors=_useFormContext.errors,watch=_useFormContext.watch,_useState2=FormRows_slicedToArray(Object(react.useState)(!1),2),expanded=_useState2[0],setExpanded=_useState2[1],showExpandButton=null==rows?void 0:rows.some((function(row){return row.expandable}));return react_default.a.createElement(react_default.a.Fragment,null,null==rows?void 0:rows.map((function(row,idx){var _row$fields,rowKey="step-".concat(stepIndex,"-row-").concat(idx),rowErrors=[],showRow=!row.expandable||expanded;return react_default.a.createElement(react.Fragment,{key:rowKey},react_default.a.createElement(StyledRow,{errors:rowErrors,label:row.label,labelAlign:row.labelAlign,labelGutter:row.labelGutter,mb:null==row?void 0:row.marginBottom,show:showRow},row.message&&react_default.a.createElement(rockskit_es.a,{color:row.messageColor,content:row.message,mb:2}),null===(_row$fields=row.fields)||void 0===_row$fields?void 0:_row$fields.map((function(field,fieldId){var _errors$data$name$ind,_errors$field$name,error=isRecurring&&errors[data.name]&&errors[data.name][index]?null===(_errors$data$name$ind=errors[data.name][index][field.name])||void 0===_errors$data$name$ind?void 0:_errors$data$name$ind.message:null===(_errors$field$name=errors[field.name])||void 0===_errors$field$name?void 0:_errors$field$name.message;return error&&rowErrors.push(error),checkCondition(field.conditions,watch,wizardData)?react_default.a.createElement(FormField,{data:data,field:field,fieldId:fieldId,hasError:!!error,isRecurring:isRecurring,recurringIndex:index,rowId:idx,stepIndex:stepIndex,wizardData:wizardData}):null}))),(null==row?void 0:row.divider)&&react_default.a.createElement(rockskit_es.f,{my:null==row?void 0:row.dividerSize}))})),showExpandButton&&react_default.a.createElement(rockskit_es.l,{color:"secondary",onClick:function onClick(){return setExpanded((function(prev){return!prev}))},size:"sm"},expanded?"Hide Optional Params":"Show Optional Params"))};FormRows.propTypes={data:prop_types_default.a.shape({name:prop_types_default.a.string,recurring:prop_types_default.a.bool,rows:prop_types_default.a.arrayOf(prop_types_default.a.shape({}))}).isRequired,stepIndex:prop_types_default.a.number.isRequired,wizardData:prop_types_default.a.shape({}).isRequired,index:prop_types_default.a.number.isRequired,isRecurring:prop_types_default.a.bool.isRequired,rows:prop_types_default.a.arrayOf(prop_types_default.a.shape({})).isRequired},FormRows.defaultProps={};var Wrapper=styled_components_browser_esm.a.div.withConfig({displayName:"Form__Wrapper",componentId:"sc-11kuada-0"})(["padding:",";background-color:",";border:1px solid ",";border-radius:16px;margin-bottom:16px;"],(function(_ref){return _ref.theme.spacing(2,2,2,6)}),(function(_ref2){return _ref2.theme.palette.gray.light}),(function(_ref3){return _ref3.theme.palette.gray.regular})),ButtonsWrapper=styled_components_browser_esm.a.div.withConfig({displayName:"Form__ButtonsWrapper",componentId:"sc-11kuada-1"})(["display:flex;justify-content:flex-end;margin-bottom:8px;"]),_ref5=react_default.a.createElement(rockskit_es.j,{icon:"trash",prefix:"fa"}),Form=function(_ref4){var data=_ref4.data,stepIndex=_ref4.stepIndex,wizardData=_ref4.wizardData,isRecurring=data.recurring,_useFieldArray=Object(index_esm.b)({name:isRecurring?null==data?void 0:data.name:""}),fields=_useFieldArray.fields,append=_useFieldArray.append,remove=_useFieldArray.remove;Object(react.useEffect)((function(){isRecurring&&0===fields.length&&append()}),[]);var renderRows=function(index){return react_default.a.createElement(FormRows,{data:data,index:index,isRecurring:isRecurring,rows:data.rows,stepIndex:stepIndex,wizardData:wizardData})};return react_default.a.createElement(react_default.a.Fragment,null,isRecurring?function renderRecurring(){return fields.map((function(item,idx){return react_default.a.createElement(Wrapper,{key:item.id},react_default.a.createElement(ButtonsWrapper,null,react_default.a.createElement(rockskit_es.l,{color:"danger",disabled:1===fields.length,onClick:function onClick(){return remove(idx)},size:"sm"},_ref5)),renderRows(idx))}))}():renderRows(),isRecurring&&react_default.a.createElement(rockskit_es.u,{content:"+ Add item",onClick:append,size:"sm"}))};Form.propTypes={data:prop_types_default.a.shape({name:prop_types_default.a.string,recurring:prop_types_default.a.bool,rows:prop_types_default.a.arrayOf(prop_types_default.a.shape({}))}).isRequired,stepIndex:prop_types_default.a.number.isRequired,wizardData:prop_types_default.a.shape({}).isRequired},Form.defaultProps={};var Form_Form=Form,index_es=__webpack_require__(164),MegaFlowIcons={faDownload:index_es.a,faHashtag:index_es.b,faTrash:index_es.c},MegaFlowPropTypes={icons:prop_types_default.a.arrayOf(prop_types_default.a.shape()),schema:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.object]).isRequired,onFinish:prop_types_default.a.func,onStepSubmit:prop_types_default.a.func,theme:prop_types_default.a.shape(),wizardProps:prop_types_default.a.shape(),wrapperProps:prop_types_default.a.shape()};function src_extends(){return(src_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function src_slicedToArray(arr,i){return function src_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function src_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function src_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return src_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return src_arrayLikeToArray(o,minLen)}(arr,i)||function src_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function src_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function src_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function src_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var src_Wrapper=styled_components_browser_esm.a.div.withConfig({displayName:"src__Wrapper",componentId:"osiobx-0"})([""]),MegaFlow=function(_ref){var icons=_ref.icons,schema=_ref.schema,onFinish=_ref.onFinish,onStepSubmit=_ref.onStepSubmit,theme=_ref.theme,wizardProps=_ref.wizardProps,wrapperProps=_ref.wrapperProps,props=src_objectWithoutProperties(_ref,["icons","schema","onFinish","onStepSubmit","theme","wizardProps","wrapperProps"]),steps=("string"==typeof schema?JSON.parse(schema):schema).steps,_useState2=src_slicedToArray(Object(react.useState)(0),2),currentStep=_useState2[0],setCurrentStep=_useState2[1],isCurrentLastStep=currentStep===steps.length-1,_useState4=src_slicedToArray(Object(react.useState)({}),2),wizardData=_useState4[0],setWizardData=_useState4[1],_useForm=Object(index_esm.c)({defaultValues:wizardData}),handleSubmit=_useForm.handleSubmit,methods=src_objectWithoutProperties(_useForm,["handleSubmit"]),stepsArray=steps.map((function(st){return{title:st.title}}));return react_default.a.createElement(rockskit_es.b,{icons:_objectSpread(_objectSpread(_objectSpread({},rockskit_es.p),MegaFlowIcons),icons),theme:theme||rockskit_es.q},react_default.a.createElement(src_Wrapper,wrapperProps,react_default.a.createElement(index_esm.a,methods,react_default.a.createElement("form",{onSubmit:handleSubmit((function onSubmit(data){var currentState=_objectSpread(_objectSpread({},wizardData),data);setWizardData(currentState),onStepSubmit&&onStepSubmit(data),isCurrentLastStep?onFinish(currentState):setCurrentStep((function(prev){return prev+1}))}))},react_default.a.createElement(rockskit_es.w,src_extends({currentStepContent:function renderForm(){return react_default.a.createElement(Form_Form,{data:steps[currentStep],stepIndex:currentStep,wizardData:wizardData})}(),currentStepIndex:currentStep,setCurrentStepIndex:setCurrentStep,steps:stepsArray},wizardProps,props))))))};MegaFlow.displayName="MegaFlow",MegaFlow.propTypes=MegaFlowPropTypes,MegaFlow.defaultProps={icons:[],onFinish:function onFinish(){}},MegaFlow.__docgenInfo={description:"",methods:[],displayName:"MegaFlow",composes:["./props"]};var src=MegaFlow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"MegaFlow",docgenInfo:MegaFlow.__docgenInfo,path:"src/index.js"});var sample=__webpack_require__(385),stories_Wrapper=(__webpack_exports__.default={title:"MegaFlow"},styled_components_browser_esm.a.div.withConfig({displayName:"stories__Wrapper",componentId:"sc-4r7zl6-0"})(["width:680px;margin:auto;padding:16px 0;"])),main=function(){return react_default.a.createElement(stories_Wrapper,null,react_default.a.createElement(src,{headerFadeColor:"#F7F7F9",onFinish:function onFinish(form){return console.log("form: ",form)},schema:sample}))};main.displayName="main",main.__docgenInfo={description:"",methods:[],displayName:"main"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories.js"]={name:"main",docgenInfo:main.__docgenInfo,path:"src/stories.js"})}},[[394,1,2]]]);
//# sourceMappingURL=main.71f133a0f360bce6302f.bundle.js.map