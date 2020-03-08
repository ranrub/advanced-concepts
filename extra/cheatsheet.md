# Image Transformation Visual Cheat Sheet





 


![Original 283 x 424 ar 2:3](images/cs-original.png)

[https://res.cloudinary.com/demo/image/upload/face_top.jpg](https://res.cloudinary.com/demo/image/upload/face_top.jpg)

## Cropping with transformations that allow Gravity Auto 

Transforming from AR 2:3 to AR 1:1 

|   |  crop | thumb  | fill   | fill pad   |
|---|---|---|---|---|
| without g_auto  | ![https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150/face_top.jpg)  | ![https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150/face_top.jpg)  | ![https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150/face_top.jpg)  | N/A  |
| with g_auto  | ![https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150,g_auto/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_crop,h_150,w_150,g_auto/face_top.jpg)  | ![https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150,g_auto/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_thumb,h_150,w_150,g_auto/face_top.jpg)  | ![https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150,g_auto/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill,h_150,w_150,g_auto/face_top.jpg)  | ![https://res.cloudinary.com/demo/image/upload/c_fill_pad,g_auto,h_150,w_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fill_pad,g_auto,h_150,w_150/face_top.jpg)  |
|   |   |   |   |   |

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

### Crop to Height 150 except limit pad 150 x 150

|   |  scale | limit  | fit   | limit fill   | limit pad ar 1:1|
|---|---|---|---|---|---|
||![https://res.cloudinary.com/demo/image/upload/c_scale,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_scale,h_150/face_top.jpg) |![https://res.cloudinary.com/demo/image/upload/c_limit,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_limit,h_150/face_top.jpg) |![https://res.cloudinary.com/demo/image/upload/c_fit,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_fit,h_150/face_top.jpg) | ![https://res.cloudinary.com/demo/image/upload/c_lfill,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lfill,h_150/face_top.jpg)|![https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg) |

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

### limit fill

c_lfill height 150 

![Limit Padd 150](images/cs-limit-fill-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_lfill,h_150/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lfill,h_150/face_top.jpg)

#### limit pad green background 150 x 150

c_lpad height 150 width 150 green background

![Limit Padd 150 x 150](images/cs-limit-pad-green-150-150.png)  
[https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg](https://res.cloudinary.com/demo/image/upload/c_lpad,h_150,w_150,b_green/face_top.jpg)




## Optimization and Performance

Using Auto Quality and Auto Format

## Positioning


| West   |      Center      |  East |
|----------|:-------------:|------:|
| ![north west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_west%20,co_black,g_north_west,b_red/1px.png)|  ![north](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north%20,co_black,g_north,b_red/1px.png) | ![north east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_east%20,co_black,g_north_east,b_red/1px.png) |
| ![west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_west%20,co_black,g_west,b_red/1px.png)|    ![center](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_center%20,co_black,g_center,b_red/1px.png)   |   ![east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_east%20,co_black,g_east,b_red/1px.png) |
| ![south west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_west%20,co_black,g_south_west,b_red/1px.png)| ![south](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20south%20,co_black,g_south,b_red/1px.png) |  ![south east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_east%20,co_black,g_south_east,b_red/1px.png) |

**CENTER**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20CENTER%20,co_black,g_center,b_red/1px.png

**N**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20N%20,co_black,g_north,b_red/1px.png

**NE**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20NE%20,co_black,g_north_east,b_red/1px.png

**E**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20E%20,co_black,g_east,b_red/1px.png

**SE**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20SE%20,co_black,g_south_east,b_red/1px.png

**S**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20S%20,co_black,g_south,b_red/1px.png

**SW**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20SW%20,co_black,g_south_west,b_red/1px.png

**W**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20W%20,co_black,g_west,b_red/1px.png

**NW**
https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20NW%20,co_black,g_north_west,b_red/1px.png


## Overlay Text

## Overlay Images

## Effects