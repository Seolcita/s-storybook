"use strict";(self.webpackChunk_seolcita_s_storybook=self.webpackChunk_seolcita_s_storybook||[]).push([[40],{"./src/stories/components/ImageStepsProgressBar/ImageStepsProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageStepsProgressBar_stories});__webpack_require__("./node_modules/react/index.js");var StyledImageStepsProgressBar=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div.withConfig({displayName:"ImageStepsProgressBarstyles__StyledImageStepsProgressBar",componentId:"sc-1figpt3-0"})(["display:flex;flex-direction:row;align-items:center;"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ImageStepsProgressBar=function ImageStepsProgressBar(_ref){var totalSteps=_ref.totalSteps,currentStep=_ref.currentStep,prevImg=_ref.prevImg,currentImg=_ref.currentImg,nextImg=_ref.nextImg,stepsArray=[];return function updateStepImages(){if(currentStep<1?currentStep=1:currentStep>totalSteps&&(currentStep=totalSteps),currentStep>1)for(var i=1;i<currentStep;i++)stepsArray.push(prevImg);stepsArray.push(currentImg);for(var _i=0;_i<totalSteps-currentStep;_i++)stepsArray.push(nextImg)}(),(0,jsx_runtime.jsx)(StyledImageStepsProgressBar,{children:stepsArray.map((function(image,idx){return(0,jsx_runtime.jsx)("div",{children:image},idx)}))})};ImageStepsProgressBar.displayName="ImageStepsProgressBar";const ImageStepsProgressBar_ImageStepsProgressBar=ImageStepsProgressBar;ImageStepsProgressBar.__docgenInfo={description:"",methods:[],displayName:"ImageStepsProgressBar",props:{totalSteps:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},prevImg:{required:!0,tsType:{name:"ReactNode"},description:""},currentImg:{required:!0,tsType:{name:"ReactNode"},description:""},nextImg:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ImageStepsProgressBar_stories={title:"Components/Atomic/ImageStepsProgressBar",component:ImageStepsProgressBar_ImageStepsProgressBar,argTypes:{currentStep:{control:{type:"number",min:1,max:6,step:1}}}};var Primary={args:{totalSteps:6,currentStep:1,prevImg:(0,jsx_runtime.jsx)("div",{style:{width:"40px",height:"30px",marginTop:"30px",marginRight:"15px",backgroundColor:"pink"}}),currentImg:(0,jsx_runtime.jsx)("div",{style:{width:"90px",height:"70px",marginRight:"10px",backgroundColor:"black"}}),nextImg:(0,jsx_runtime.jsx)("div",{style:{width:"50px",marginRight:"30px",rotate:"-40deg",backgroundColor:"skyblue"}})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    totalSteps: 6,\n    currentStep: 1,\n    prevImg,\n    currentImg,\n    nextImg\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);