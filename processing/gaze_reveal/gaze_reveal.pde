/**
 *  DEMAA - reveal an image based on gaze data
 *  @author rob.dunne@manchester.ac.uk
 */

// Set the vars
int bg_r = 20;
int bg_g = 20;
int bg_b = 20;
int gaze_x = 640;
int gaze_y = 500;
int gaze_size_x = 30;
int gaze_size_y = 30;
PImage img;
PImage img_section;
PGraphics mask;
Table gaze_data;
int counter1 = 0;
int counter2 = 0;
int[] gaze_data_x;
int[] gaze_data_y;

void setup() {
  // Set the canvas size as the image size
  size(1280, 1024, P2D);
  
  // Set the background colour
  background(bg_r, bg_g, bg_b);
  
  // Load the image
  img = loadImage("1934.394med_resized.png");
  
  // Load the image mask
  mask = createGraphics(gaze_size_x, gaze_size_y);
  
  // Load the gaze data
  gaze_data = loadTable("rec06.tsv", "header");
  gaze_data_x = new int[gaze_data.getRowCount()];
  gaze_data_y = new int[gaze_data.getRowCount()];
  
  for(TableRow row : gaze_data.rows()) {
     // Get the coordinates from the data file into an array
     gaze_data_x[counter1] = row.getInt("GazePointX");
     gaze_data_y[counter1] = row.getInt("GazePointY");
     
     counter1++;
  }
  
  // Set the framerate
  frameRate(30);
}

void draw() {
  // Reset the background
  //background(bg_r, bg_g, bg_b);
  
  // Get the gaze coordinates
  gaze_x = gaze_data_x[counter2];
  gaze_y = gaze_data_y[counter2];

  // Draw the section of the image, masked for rounded corners
  mask.beginDraw();
  mask.noStroke();
  mask.fill(255);
  mask.ellipseMode(CORNER);
  mask.ellipse(gaze_x, gaze_y, gaze_size_x, gaze_size_y);
  mask.endDraw();
  
  img_section = img.get(gaze_x, gaze_y, gaze_size_x, gaze_size_y);
  
  img_section.mask(mask);
  image(img_section, gaze_x, gaze_y);
  
  counter2++;
  
  // Save each frame for creating a gif
  saveFrame("frames-1934.394med/#######.png");
  
  // Stop the loop when at the end of the data array
  if(counter2 >= counter1) {
    noLoop();
  }
}