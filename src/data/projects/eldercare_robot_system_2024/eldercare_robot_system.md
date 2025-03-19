# Multi-Modal Interactive Healthcare Robot System (2024)

## Project Overview

Developed three interconnected healthcare robotic systems targeting elderly care: "HootScape," "ESP32 Owl Companion," and "Magic Hand Assistive Gripper." These systems address different aspects of elderly healthcare through a combination of ambient computing, interactive robotics, and intelligent assistive technologies. The project integrates custom hardware with specialized software to create intuitive, therapeutic, and supportive healthcare environments that enhance independence and cognitive function while providing essential monitoring capabilities.

## Key Contributions

- Designed and implemented a modular robot architecture that seamlessly integrated multiple subsystems including motion control, audio processing, and user interaction
- Developed novel algorithms for movement quality monitoring that provide real-time feedback to elderly users, helping them maintain proper control when manipulating objects
- Created an intelligent spatial audio system that generates immersive 3D soundscapes to create a calming and therapeutic environment
- Engineered a comprehensive TCP/IP interface allowing external monitoring systems to track user performance and health metrics
- Integrated computer vision capabilities to enable automatic detection of objects and environmental hazards
- Implemented low-power optimization techniques that significantly extended battery life while maintaining full functionality

## Technical Architecture

<p align="center">
  <video controls width="80%" style="max-width: 200px;">
    <source src="/videos/projects/eldercare_robot_system_2024/esp32-owl-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<p align="center"><em>ESP32 Owl Companion - Interactive robot providing companionship and communication</em></p>

<p align="center">
  <video controls width="80%" style="max-width: 200px;">
    <source src="/videos/projects/eldercare_robot_system_2024/hootscape-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<p align="center"><em>HootScape - Ambient computing environment creating therapeutic soundscapes</em></p>

<p align="center">
  <video controls width="80%" style="max-width: 200px;">
    <source src="/videos/projects/eldercare_robot_system_2024/magichand-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<p align="center"><em>Magic Hand Assistive Gripper - Assistive device for proper object manipulation</em></p>

The system architecture is designed around three complementary components:

1. **HootScape**: An ambient computing environment that creates therapeutic soundscapes and monitors user activity
2. **ESP32 Owl Companion**: A small, interactive robot that provides companionship and acts as a communication hub
3. **Magic Hand Assistive Gripper**: An assistive device that helps users grasp objects with proper technique and provides feedback

These components communicate wirelessly and work together to create a comprehensive care system.

## Technical Skills Demonstrated

- **Embedded Systems Development**: Programmed ESP32 and M5Stack microcontrollers using Arduino framework for real-time processing and control
- **Sensor Fusion**: Integrated data from IMU sensors, cameras, and microphones to create a comprehensive environmental awareness system
- **Computer Vision**: Implemented real-time object detection and tracking algorithms for monitoring user activities
- **Audio Processing**: Developed spatial audio algorithms for creating immersive 3D soundscapes with therapeutic benefits
- **Network Communication**: Created reliable TCP/IP interfaces for remote monitoring and control
- **Power Management**: Designed efficient deep sleep and wake cycles to optimize battery performance
- **Mechanical Design**: Engineered ergonomic gripper mechanisms and robotic movement systems
- **User Interface Design**: Created intuitive interaction patterns optimized for elderly users with varying technical abilities

## Achievements

- Improved elderly user independence through innovative assistive technology as demonstrated through extensive user testing
- Reduced cognitive load on caregivers by automating routine monitoring tasks while maintaining high quality of care
- Created an expandable platform that can be customized for different care scenarios and individual user needs
- Developed technologies that seamlessly integrate into living environments without requiring significant structural modifications

## Technologies Used

- **Hardware**: ESP32-C3 RISC-V MCU, M5StickC Plus2, MPU6886 6-Axis IMU, WS2812B LED rings, servo motors
- **Software & Frameworks**: Arduino, Python, SpatialScaper, ROS (Robot Operating System)
- **Communication Protocols**: WiFi, I2C, I2S, HTTP/REST API
- **Computer Vision**: Convolutional Neural Networks for object detection and scene understanding
- **Audio Processing**: Spatial audio algorithms, text-to-speech synthesis, voice recognition
- **Power Systems**: LiPo battery management, deep sleep optimization, voltage monitoring
- **Mechanical Components**: Custom-designed gripper mechanisms, servo-controlled movement systems

## Source Code

- **[HootScape](https://github.com/anh0001/hootscape.git)**: Repository for the ambient computing environment that creates therapeutic soundscapes
- **[ESP32 Owl Companion](https://github.com/anh0001/esp32-owl-companion.git)**: Code for the interactive companion robot based on ESP32
- **[Magic Hand Assistive Gripper](https://github.com/anh0001/magic-hand-assistive-gripper.git)**: Source for the assistive gripping device with feedback mechanisms

## Future Directions

This project lays the foundation for more advanced healthcare robotics systems. Future work will focus on:

1. Enhancing the emotional intelligence of the companion robot
2. Expanding the range of activities supported by the assistive gripper
3. Creating more personalized therapeutic soundscapes based on user preferences and needs
4. Integrating with existing smart home and telehealth systems