# Metaverse-Ready 3D Photography: Mobile Robot for Automated 3D Object Reconstruction (2023)

## Project Overview

Developed a mobile robot system for automated 3D photography and object reconstruction, transforming how products are digitized for e-commerce and metaverse applications. The robot autonomously navigates around objects while capturing high-resolution images from multiple angles. Using a differential drive system with precision navigation, it follows predefined paths while maintaining camera focus on the target object. The system incorporates automatic blur detection and advanced mathematical modeling to ensure optimal image quality for 3D reconstruction.

<p align="center"><img src="/images/projects/mobile_3d_photo_robot_2023/robot_main.webp" alt="3D Photography Mobile Robot (2023) - Robot photographing batik shirt" width="80%"></p>

## Key Contributions

- Designed and implemented a comprehensive mobile robot system with integrated camera fixturing that enables rotation to maintain focus on center objects
- Developed a mathematical model for precise robot navigation using IMU data fusion and state-space representation
- Created an intuitive Node-RED web interface for remote robot operation and monitoring
- Implemented blur detection algorithms using Laplacian kernels to ensure high-quality image datasets
- Engineered a novel calibration process where the robot learns trajectories by following contrast tape paths

## Project Demo Video

<div align="center">
  <iframe width="80%" height="480" src="https://www.youtube.com/embed/ExsCNhGe_TQ?start=85" title="Mobile 3D Photography Robot Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><em>Mobile 3D Photography Robot demonstration video</em></p>
</div>

## Technical Architecture

<p align="center"><img src="/images/projects/mobile_3d_photo_robot_2023/system_architecture.webp" alt="Mathematical model for the mobile robot system (2023)" width="80%"></p>

*Figure: System architecture showing the state-space representation and camera rotation mathematics*

The system architecture consists of:

1. **Hardware Layer**: Raspberry Pi 3B+ as the master controller connected to an STM32F407V microcontroller that handles motor control and sensor data processing
2. **Navigation System**: Utilizes MPU6050 IMU sensor and rotary encoders to maintain precise positional awareness
3. **Image Acquisition**: Controls a high-resolution DSLR camera with automated triggering and positioning
4. **User Interface**: Node-RED based web dashboard for operation, monitoring, and result visualization

<p align="center"><img src="/images/projects/mobile_3d_photo_robot_2023/robot_simulation.webp" alt="3D Photography Robot Simulation (2023)" width="60%"></p>

*Figure: 3D simulation of the robot navigating around the object while maintaining camera focus*

## Digital Products Created

The system has been successfully used to create high-quality 3D models for batik clothing and cultural artifacts, enhancing e-commerce capabilities for local Indonesian businesses.

<p align="center"><img src="/images/projects/mobile_3d_photo_robot_2023/batik_shirt.webp" alt="3D-ready batik shirt photographed by the robot (2023)" width="50%"></p>

*Figure: Example of a batik shirt photographed by the mobile robot system*

## Technical Skills Demonstrated

- Computer vision techniques for image quality assessment and 3D reconstruction
- Robotics control systems design and implementation
- Mathematical modeling for differential drive mobile robots
- Web-based user interface development
- Motion planning and navigation system development
- Systems integration across hardware and software platforms

## Achievements

- Secured multiple patents for the mobile robot 3D scanning technology
- Published research papers in international conferences including IEEE International Electronics Symposium
- Created a product with significant commercial viability for photography studios, e-commerce, and creative industries
- Successfully demonstrated the system to industry partners with positive reception
- Developed a solution that significantly improves efficiency in 3D object reconstruction compared to manual methods

## Technologies Used

- **Controllers**: Raspberry Pi 3B+ (master) and STM32F407V (slave)
- **Motion System**: DC motors with rotary encoders for precise movement
- **Sensors**: MPU6050 IMU sensor for orientation tracking
- **Imaging**: High-resolution DSLR camera integration
- **Software**: Node-RED for web interface development
- **Algorithms**: Structure from Motion (SfM) for 3D reconstruction, PID control for navigation
- **Programming Languages**: Python, C/C++

## Project Funding

This project was funded by DRPM (Ministry of Education, Culture, Research, and Technology) with a grant of IDR 132.668 M.

## Future Directions

The current system provides an excellent foundation for automated 3D object digitization. Future work will focus on:

1. Implementing AI-based path planning for automatic optimal camera position determination
2. Integrating real-time 3D preview of the reconstruction during image capture
3. Developing specialized versions for different scales of objects (from small jewelry to furniture)
4. Creating a cloud-based platform for sharing and distributing 3D models