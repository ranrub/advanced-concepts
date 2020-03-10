# Image Transformation Visual Cheat Sheet


![Original Image 1000 x 1500 ar 2:3](https://res.cloudinary.com/cloudinary-training/image/upload/woman-standing.jpg)



[https://res.cloudinary.com/cloudinary-training/image/upload/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/woman-standing.jpg)

## Cropping with transformations that allow Gravity Auto 

Transforming from AR 2:3 to AR 1:1 

|   |  crop | thumb  | fill   | fill pad   |
|---|---|---|---|---|
| without g_auto  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150/woman-standing.jpg)  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150/woman-standing.jpg)  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150/woman-standing.jpg)  | N/A  |
| with g_auto  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150,g_auto/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150,g_auto/woman-standing.jpg)  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150,g_auto/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150,g_auto/woman-standing.jpg)  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150,g_auto/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150,g_auto/woman-standing.jpg)  | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_fill_pad,g_auto,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill_pad,g_auto,h_150,w_150/woman-standing.jpg)  |
|   |   |   |   |   |

### Crop to Width 150 x Height 150 

#### crop 

c_crop 150 x 150

![Crop 150 x 150](images/cs-crop-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150/woman-standing.jpg)

#### crop with gravity auto  

c_crop 150 x 150 g_auto 

![Crop 150 x 150 with g_auto](images/cs-crop-g-auto-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_crop,h_150,w_150,g_auto/woman-standing.jpg)

#### thumb

c_thumb 150 x 150 

![Thumb 150 x 150 with g_auto](images/cs-thumb-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150/woman-standing.jpg)


#### thumb with gravity auto

c_thumb 150 x 150 g_auto

![Thumb 150 x 150 with g_auto](images/cs-thumb-g-auto-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150,g_auto/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_thumb,h_150,w_150,g_auto/woman-standing.jpg)

#### fill

c_fill 150 x 150

![Fill 150 x 150 with g_auto](images/cs-fill-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150,g_auto/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,h_150,w_150,g_auto/woman-standing.jpg)


#### fill with gravity auto

c_fill 150 x 150 g_auto

![Fill 150 x 150 with g_auto](images/cs-fill-g-auto-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,g_auto,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill,g_auto,h_150,w_150/woman-standing.jpg)

#### fill pad  

N/A

#### fill pad with gravity auto

c_fill_pad 150 x 150 g_auto

![Fill 150 x 150 with g_auto](images/cs-fill-pad-g-auto-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_fill_pad,g_auto,h_150,w_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fill_pad,g_auto,h_150,w_150/woman-standing.jpg)

## Cropping with transformations that DO NOT allow Gravity Auto  

### Crop to Height 150 except limit pad 150 x 150

|   |  scale | limit  | fit   | limit fill   | limit pad ar 1:1|
|---|---|---|---|---|---|
||![https://res.cloudinary.com/cloudinary-training/image/upload/c_scale,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_scale,h_150/woman-standing.jpg) |![https://res.cloudinary.com/cloudinary-training/image/upload/c_limit,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_limit,h_150/woman-standing.jpg) |![https://res.cloudinary.com/cloudinary-training/image/upload/c_fit,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fit,h_150/woman-standing.jpg) | ![https://res.cloudinary.com/cloudinary-training/image/upload/c_lfill,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_lfill,h_150/woman-standing.jpg)|![https://res.cloudinary.com/cloudinary-training/image/upload/c_lpad,h_150,w_150,b_green/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_lpad,h_150,w_150,b_green/woman-standing.jpg) |

#### scale

c_scale height 150

![Scale height 150](images/cs-scale-h-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_scale,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_scale,h_150/woman-standing.jpg)

#### limit

c_limit height 150

![Limit height 150](images/cs-limit-h-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_limit,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_limit,h_150/woman-standing.jpg)


#### fit

c_fit height 150

![Fit height 150](images/cs-fit-h-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_fit,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_fit,h_150/woman-standing.jpg)

### limit fill

c_lfill height 150 

![Limit Padd 150](images/cs-limit-fill-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_lfill,h_150/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_lfill,h_150/woman-standing.jpg)

#### limit pad green background 150 x 150

c_lpad height 150 width 150 green background

![Limit Padd 150 x 150](images/cs-limit-pad-green-150-150.png)  
[https://res.cloudinary.com/cloudinary-training/image/upload/c_lpad,h_150,w_150,b_green/woman-standing.jpg](https://res.cloudinary.com/cloudinary-training/image/upload/c_lpad,h_150,w_150,b_green/woman-standing.jpg)




## Optimization and Performance

Using Auto Quality and Auto Format

## Positioning

### Direction

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

### Direction offset x 10, y 10

|    |            |   |
|----------|:-------------:|------:|
| ![north west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_west%20,co_black,g_north_west,x_10,y_10,b_red/1px.png)|  ![north](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north%20,co_black,g_north,x_10,y_10,b_red/1px.png) | ![north east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_east%20,co_black,g_north_east,x_10,y_10,b_red/1px.png) |
| ![west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_west%20,co_black,g_west,x_10,y_10,b_red/1px.png)|    ![center](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_center%20,co_black,g_center,b_red,x_10,y_10/1px.png)   |   ![east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_east%20,co_black,g_east,x_10,y_10,b_red/1px.png) |
| ![south west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_west%20,co_black,g_south_west,x_10,y_10,b_red/1px.png)| ![south](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20south%20,co_black,g_south,x_10,y_10,b_red/1px.png) |  ![south east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_east%20,co_black,g_south_east,x_10,y_10,b_red/1px.png) |

### Direction offset x -10, y -10

|    |            |   |
|----------|:-------------:|------:|
| ![north west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_west%20,co_black,g_north_west,x_-10,y_-10,b_red/1px.png)|  ![north](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north%20,co_black,g_north,x_-10,y_-10,b_red/1px.png) | ![north east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_north_east%20,co_black,g_north_east,x_-10,y_-10,b_red/1px.png) |
| ![west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_west%20,co_black,g_west,x_-10,y_-10,b_red/1px.png)|    ![center](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_center%20,co_black,g_center,b_red,x_-10,y_-10/1px.png)   |   ![east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_east%20,co_black,g_east,x_-10,y_-10,b_red/1px.png) |
| ![south west](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_west%20,co_black,g_south_west,x_-10,y_-10,b_red/1px.png)| ![south](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20south%20,co_black,g_south,x_-10,y_-10,b_red/1px.png) |  ![south east](https://res.cloudinary.com/pictures77/image/upload/c_scale,f_auto,h_150,q_auto,w_150/l_text:Times_20:%20g_south_east%20,co_black,g_south_east,x_-10,y_-10,b_red/1px.png) |





## Overlays

### Text and Image over Video
Click image to view video

<a href="https://res.cloudinary.com/demo/video/upload/w_400,c_fill,ar_4:3,q_auto,f_auto/l_cloudinary_icon,g_south_east,y_25,x_5,o_50,w_100//l_text:Times_20:@cloudinary,g_north_east,y_10,x_10,co_rgb:0071BA,o_75/cld_rubiks_guy.mp4" target="_blank"><img src="https://res.cloudinary.com/demo/video/upload/w_400,c_fill,ar_4:3,q_auto,f_auto/l_cloudinary_icon,g_south_east,y_25,x_5,o_50,w_100//l_text:Times_20:@cloudinary,g_north_east,y_10,x_10,co_rgb:0071BA,o_75/cld_rubiks_guy" 
alt="IMAGE ALT TEXT HERE" width="400" height="300" border="10" /></a>

Full URL to video:  

[https://res.cloudinary.com/demo/video/upload/w_400,c_fill,ar_4:3,q_auto,f_auto/l_cloudinary_icon,g_south_east,y_25,x_5,o_50,w_100/l_text:Times_20:@cloudinary,g_north_east,y_10,x_10,co_rgb:0071BA,o_75/cld_rubiks_guy.mp4](https://res.cloudinary.com/demo/video/upload/w_400,c_fill,ar_4:3,q_auto,f_auto/l_cloudinary_icon,g_south_east,y_25,x_5,o_50,w_100/l_text:Times_20:@cloudinary,g_north_east,y_10,x_10,co_rgb:0071BA,o_75/cld_rubiks_guy.mp4)

URL to base video:  

[https://res.cloudinary.com/demo/video/upload/cld_rubiks_guy.mp4](https://res.cloudinary.com/demo/video/upload/cld_rubiks_guy.mp4)

URL to Cloudinary Icon:  

[https://res.cloudinary.com/demo/image/upload/v1426538492/cloudinary_icon.png](https://res.cloudinary.com/demo/image/upload/v1426538492/cloudinary_icon.png)


Text Transformation
|   | Transformation  | Description  |
|---|---|---|
|   |  l_text:Times_20:@cloudinary |  Overlay text using font family Times with font size 20 and text content '@cloudinary'  |
|   |  g_north_east |position orientation north east (upper right) corner   | 
|   |  y_10 | position offset 10 down from the top   |
|   |  x_10 | position offset 10 to the left of the right side | 
|   |  co_rgb:0071BA| color RGB hex blue branding color  | 
|   |  0_75 | opacity 75 with 100 being fully opaque (least transparent)  |  


## Effects

