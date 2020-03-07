# Transformation Visual Cheat Sheet



## Cropping with transformations that allow Gravity Auto


![Original 283 x 424 ar 2:3](images/cs-original.png)

[https://res.cloudinary.com/demo/image/upload/face_top.jpg](https://res.cloudinary.com/demo/image/upload/face_top.jpg)

### Crop to Width 150 x Height 150 

#### crop 

c_crop 150 x 150

![Crop 150 x 150](images/cs-crop-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150/face_top.jpg)

#### crop with gravity auto  

c_crop 150 x 150 g_auto 

![Crop 150 x 150 with g_auto](images/cs-crop-g-auto-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150,g_auto/face_top.jpg)

#### thumb

c_thumb 150 x 150 

![Thumb 150 x 150 with g_auto](images/cs-thumb-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150/face_top.jpg)


#### thumb with gravity auto

c_thumb 150 x 150 g_auto

![Thumb 150 x 150 with g_auto](images/cs-thumb-g-auto-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150,g_auto/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150,g_auto/face_top.jpg)

#### fill

c_fill 150 x 150

![Fill 150 x 150 with g_auto](images/cs-fill-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150,g_auto/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150,g_auto/face_top.jpg)


#### fill with gravity auto

c_fill 150 x 150 g_auto

![Fill 150 x 150 with g_auto](images/cs-fill-g-auto-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_fill,g_auto,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill,g_auto,h_150,w_150/face_top.jpg)

#### fill pad  

N/A

#### fill pad with gravity auto

c_fill_pad 150 x 150 g_auto

![Fill 150 x 150 with g_auto](images/cs-fill-pad-g-auto-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_fill_pad,g_auto,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill_pad,g_auto,h_150,w_150/face_top.jpg)

## Cropping with transformations that DO NOT allow Gravity Auto  

### Crop to Height 150 

#### scale

c_scale height 150

![Scale height 150](images/cs-scale-h-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_scale,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_scale,h_150/face_top.jpg)

#### limit

c_limit height 150

![Limit height 150](images/cs-limit-h-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_limit,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_limit,h_150/face_top.jpg)


#### fit

c_fit height 150

![Fit height 150](images/cs-fit-h-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_fit,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fit,h_150/face_top.jpg)

#### limit pad green background 150 x 150

c_lpad height 150 width 150 green background

![Limit Padd 150 x 150](images/cs-limit-pad-green-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg)

### limit fill 150 x 150

c_lfill height 150 width 150 

![Limit Padd 150 x 150](images/cs-limit-fill-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_lfill,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lfill,h_150,w_150/face_top.jpg)


## Optimization and Performance

## Positioning

## Overlay Text

## Overlay Images

## Effects