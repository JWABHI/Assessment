// Get the image container element
var imageContainer = document.querySelector('.image-container');
var deleteImage=document.getElementById('removeAll')
var removeBlankImage=document.getElementById('remove-blank-images')
// var imageDiv= document.querySelector('.InnerContainer');


const scannerDevices = document.getElementById("scanner-devices");
const resolutionSize=document.getElementById("resolution");
// get list of available scanner devices
const availableDevices = ["Scanner Device 1", "Twain Feelimage", "Scanner Device 3"];

// add each device to the dropdown list
availableDevices.forEach(device => {
  const option = document.createElement("option");
  option.value = device;
  option.text = device;
  scannerDevices.add(option);
  // console.log( option.text);
});
const checkbox = document.getElementById("myCheckbox");
// const image = document.getElementById("myImage");
// console.log(scannerDevices.value)
let scanImages=[
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
 ];
scannerDevices.addEventListener('change',function(){

  if(scannerDevices.value==='Twain Feelimage'  )
  {
  
  scanImages[0].src='./myimage.jpg';
  scanImages[1].src='./image2.jpg';
  scanImages[2].src='./image3.jpg';
  scanImages[3].src='./image4.jpg';
  scanImages[4].src=''
  scanImages[5].src=''
  // console.log(scanImages[0]);
  for (let i = 0; i < scanImages.length; i++) {
    let CreateDiv = document.createElement("div");
    const imgs = document.createElement('img');
    imgs.src = scanImages[i].src;
    imgs.style.width='195px'
    imgs.style.height='245px'
    imageContainer.appendChild(CreateDiv);
    CreateDiv.appendChild(imgs);  
  }
  imageCounter();
  }
  else{
    imageContainer.innerHTML='' 
  }
})

// let scanImages2=[
//   new Image(),
//   new Image(),
//   new Image(),
//   new Image(),
//   new Image(),
//   new Image(),
//  ];
//  scannerDevices.addEventListener('change',function(){

//   if(scannerDevices.value==='Scanner Device 3')
//   {
  
//   scanImages2[0].src='./myimage.jpg';
//   scanImages2[1].src='./image2.jpg';
//   scanImages2[2].src='./image3.jpg';
//   scanImages2[3].src='./image4.jpg';
//   scanImages2[4].src='./image5.jpg';
//   scanImages2[5].src='./image6.jpg';
//   // console.log(scanImages[0]);
//   for (let i = 0; i < scanImages2.length; i++) {
//     let CreateDiv = document.createElement("div");
//     const imgs = document.createElement('img');
//     imgs.src = scanImages[i].src;
//     imgs.style.width='195px'
//     imgs.style.height='245px'
//     imageContainer.appendChild(CreateDiv);
//     CreateDiv.appendChild(imgs);  
//   }
//   }
//   else{
//     imageContainer.innerHTML='' 
//   }
// })



function ShowDataBase() {
   
  for (let i = 0; i < scanImages.length; i++) {
    let CreateDiv = document.createElement("div");
    const imgs = document.createElement('img');
    imgs.src = scanImages[i].src;
    imgs.style.width='195px'
    imgs.style.height='245px'
    imageContainer.appendChild(CreateDiv);
    CreateDiv.appendChild(imgs);
  }
 
}
// Add an event listener to the checkbox
checkbox.addEventListener("change", function() {
 
  if(this.checked) {
    // Checkbox is checked, show the image
    console.log('Checked');
   
  imageContainer.innerHTML=''
    // ShowDataBase();
  } else {
    ShowDataBase();
    console.log('UnChecked');
   
    
  }
});

// To Delete All Images 
deleteImage.addEventListener('click',function(){
  // console.log('Delete All');
  imageContainer.innerHTML='';
  scanImages=[]
})


// Check the number of images inside the container

function imageCounter(){
  var imageCount = imageContainer.childElementCount;
  console.log(imageCount,'Image Count in Viewer');
  // If there are less than 4 images, hide the scrollbar
  if (imageCount <= 4) {
    imageContainer.style.overflowY = 'hidden';
  }
}

// To remove blank images from the device
removeBlankImage.addEventListener('click',()=>{
  for (let i = 0; i < scanImages.length; i++) {
  console.log(!scanImages[i].src)

  if (!scanImages[i].src) {
    scanImages[i].removeChild();
    }
  }
 
})

// console.log(removeBlankImage,"remove");
