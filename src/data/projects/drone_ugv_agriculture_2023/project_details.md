# Drone and UGV Collaboration for Automated Agricultural Revolution (2023)

## Project Overview

Led the development of an integrated drone-UGV (Unmanned Ground Vehicle) system for precision agriculture, combining aerial surveillance with ground operations to optimize pest control, crop monitoring, and resource management in Indonesian rice cultivation. This cutting-edge approach significantly enhanced agricultural efficiency while reducing resource waste and environmental impact through the implementation of VARI (Visible Atmospherically Resistant Index) analysis and PSO (Particle Swarm Optimization) algorithms for targeted spraying operations.

<p align="center"><img src="/images/projects/drone_ugv_agriculture_2023/vari_analysis.webp" alt="VARI Analysis and PSO Optimization" width="80%"></p>

<p align="center"><img src="/images/projects/drone_ugv_agriculture_2023/drone_crop_scanning.webp" alt="Drone Scanning Crops and Field Visualization" width="40%"></p>

## Key Contributions

- Designed and implemented a PSO (Particle Swarm Optimization) algorithm for automated path planning that optimized drone spraying routes based on VARI (Visible Atmospherically Resistant Index) imaging data
- Developed the mechanical and control systems for a quad plane UAV with tilt-rotor capabilities, enabling vertical takeoff/landing and efficient fixed-wing flight
- Created computer vision algorithms for automated plant health analysis and pest detection using RGB imagery
- Engineered a complete system integration between aerial data collection platforms and ground-based agricultural robots
- Implemented real-time data processing and decision-making systems to coordinate drone-UGV operations effectively

## Technical Methodology & Architecture

<p align="center"><img src="/images/projects/drone_ugv_agriculture_2023/research_methods.webp" alt="Research Methods and System Design" width="90%"></p>

*Figure: Research methods, system design, and implementation components of the drone-UGV system*

The system employs advanced computational methodologies:

1. **VARI Imaging**: Implemented the Visible Atmospherically Resistant Index (VARI) calculated as (Green - Red)/(Green + Red - Blue) to identify areas of plant stress and pest infestation
   
2. **Image Segmentation**: Applied thresholding techniques to convert VARI imagery into binary maps indicating healthy vs. stressed crop regions
   
3. **PSO Optimization**: Utilized Particle Swarm Optimization to refine segmentation parameters and optimize UAV flight paths with the objective function J(x) = α·L(x) + β·C(x), balancing travel distance minimization with coverage maximization
   
4. **System Integration**: Developed both fixed-wing and multirotor drone systems connected to ground vehicles with 20-liter capacity spraying systems

<p align="center"><img src="/images/projects/drone_ugv_agriculture_2023/field_testing.webp" alt="Field Testing and Implementation Activities" width="95%"></p>

*Figure: Field testing activities and implementation in rice fields in Wiyung, Surabaya*

The complete architecture includes:

1. **Aerial Component**: Modified spraying drone and quad plane UAV with tilt-rotor capabilities for efficient flight and RGB imaging
2. **Ground Component**: Autonomous UGV designed for navigating through crop rows while carrying treatment systems
3. **Data Processing Pipeline**: Robust analysis system implementing VARI and thresholding algorithms for crop health assessment
4. **Decision Support System**: Optimized spraying path recommendations based on PSO algorithms
5. **Control Interface**: Field-tested control systems for precision spraying operations

## Technical Skills Demonstrated

- Computer vision and image processing (VARI analysis, image segmentation, thresholding)
- Algorithm development (PSO for optimization problems)
- UAV/drone engineering (mechanical design, electronic systems, flight control)
- Robotics design and programming
- Data analysis and visualization
- Control systems development and testing
- Sensor integration and fusion

## Project Demo Video

<div align="center">
  <iframe width="80%" height="400" src="https://www.youtube.com/embed/15jx0mif99M?start=0" title="Drone-UGV Agricultural Revolution Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><em>Demo video showcasing the Drone-UGV system for precision agriculture</em></p>
</div>

## Key Results & Achievements

- Successfully developed and field-tested the PENSpray drone system with 20-liter capacity, demonstrating stable and efficient operation
- Implemented precision spraying capabilities that adapt to field conditions and crop types
- Integrated aerial mapping data with spraying operations to enable targeted pest management
- Achieved significant improvement in pesticide usage efficiency and crop protection
- Achieved patent registration for "Fixed Wing UAV with 4 Drives for Aerial Mapping" (Patent No. S00202311941)
- Published research in international conferences, including "Enhancing Precision Agriculture through PSO-Enabled Drones: Targeted Pest Control in Indonesian Rice Cultivation"
- Presented the PENSpray technology at the PENSASI 2023 Innovation and Vocational Technology Exhibition
- Established collaboration with industry partner PT Halia Teknologi Nusantara

## Technologies Used

- **Programming Languages**: Python, MATLAB for image processing and algorithm development
- **Flight Control**: Ardupilot flight control systems with custom modifications
- **Computer Vision**: OpenCV, custom VARI analysis algorithms
- **Navigation**: RTK GPS, IMU sensor systems for navigation and stabilization
- **Design Tools**: Mechanical CAD for drone and UGV design
- **Communication**: Custom telemetry systems for real-time data transfer
- **Data Analysis**: Custom data analysis tools for agricultural metrics

## Project Funding

This project was funded by DRPM (Ministry of Education, Culture, Research, and Technology) with a grant of IDR 136.328M.

## Future Directions

The success of this initial system establishes a foundation for future developments:

1. Expanding the system to support additional crop types beyond rice cultivation
2. Implementing more sophisticated AI for pest identification and treatment recommendations
3. Developing autonomous recharging and refilling capabilities for extended operation
4. Creating a more accessible interface for farmers with limited technical expertise
5. Integrating with weather forecasting data to optimize treatment timing