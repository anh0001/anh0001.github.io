# Intelligent Mobile Manipulator for Home Gardening Applications (2025)

## Project Overview

Developed an advanced ceiling-mounted and mobile robot system for home gardening and agricultural applications. This project integrates computer vision and robotics to automate plant care tasks in indoor environments, particularly focusing on trailer living spaces. The system utilizes object detection and affordance segmentation to identify plants and gardening tools, enabling precise watering, maintenance, and interaction with the environment.

<p align="center"><img src="/images/projects/home_gardening_robot_2025/ceiling_arm_robot.webp" alt="Ceiling Arm Robot for Home Gardening" width="80%"></p>

## Key Contributions

- Implemented a transformer network-based object detection and affordance segmentation system capable of identifying garden tools, plants, and interaction points
- Developed a novel approach that transforms traditional steering algorithms into precise position control for robotic manipulators
- Created a dual-robot system with both ceiling-mounted arm and mobile base configurations to provide comprehensive plant care coverage
- Integrated RGB image processing, depth sensing, and point cloud analysis for enhanced environmental perception
- Designed specialized end-effectors for watering, pruning, and plant manipulation tasks
- Implemented IoT connectivity to synchronize with smart home systems for coordinated environmental control

## Technical Methodology

<p align="center"><img src="/images/projects/home_gardening_robot_2025/system_architecture.webp" alt="System Architecture and Object Detection" width="80%"></p>

*Figure: System architecture showing the neural network design for object detection and affordance segmentation*

The system employs three primary technical components:

1. **Vision System**:
   - Utilizes RGB image input for object detection and affordance segmentation
   - Employs a SqueezeNet backbone for feature extraction from both RGB and depth images
   - Implements a transformer network architecture with self-attention mechanism to understand spatial relationships

2. **Robot Control**:
   - Transforms traditional steering parameters into precise position controls for manipulator arms
   - Employs neural-based control for natural movement patterns
   - Implements real-time trajectory planning with obstacle avoidance

3. **Smart Integration**:
   - IoT connectivity allows synchronization with other home systems
   - Remote monitoring capabilities via smartphone app
   - Automated scheduling of gardening tasks based on soil moisture sensing

<p align="center"><img src="/images/projects/home_gardening_robot_2025/affordance_examples.webp" alt="Affordance Detection Examples" width="80%"></p>

*Figure: Examples of affordance detection showing how the system identifies interaction points on garden tools*

## Technical Skills Demonstrated

- Computer vision and deep learning for object detection and segmentation
- Robotic control system design and implementation
- Integration of sensors (RGB-D cameras, moisture sensors) for environmental monitoring
- Transformer neural network architectures
- Real-time processing for responsive robot operation
- IoT and smart home integration
- End-to-end system testing and optimization

## Applications and Benefits

The system provides several key advantages for home gardening:

1. **Dynamic Garden Design and Maintenance**:
   - Plant rearrangement to optimize sunlight exposure and aesthetics
   - Vertical garden care by reaching elevated areas

2. **Targeted Watering and Irrigation Management**:
   - Soil moisture sensing for individualized plant watering
   - Water recycling systems for efficient garden irrigation

3. **Smart Home Integration**:
   - Seamless connection with existing smart home devices
   - Remote monitoring and control via smartphone applications

## Ongoing Development Plans

Future developments for this project include:

- Adding hand's eye camera (RGBD) to the end-effector for enhanced precision
- Implementing multiple remote eye cameras for comprehensive environment monitoring
- Building GAN models to generate synthetic training data, bridging the gap between simulation and real-world scenarios
- Developing mimicking capabilities that allow the robot to learn from human demonstrations

## Mobile Base Platform

In addition to the ceiling-mounted arm, the project incorporates a mobile base platform with advanced movement capabilities:

<p align="center">
  <video controls width="80%" style="max-width: 200px;">
    <source src="/videos/projects/home_gardening_robot_2025/mobile_base_demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

*Video: Demonstration of the mobile base platform with omnidirectional movement*

The mobile platform features:
- Four-wheel drive (4WD) with individual hub motors
- Omnidirectional movement capabilities, including lateral movement
- Designed to attach the robotic arm for increased workspace flexibility
- Precise position control for navigation in confined home spaces

This mobile base significantly expands the system's capabilities by allowing the robot to cover larger areas and reach plants throughout the home environment. The omnidirectional movement is particularly valuable in confined spaces where traditional differential drive systems would struggle to maneuver effectively.

## Mimicking Arm Robot Demonstration

The system includes a mimicking capability where the robot can learn from human demonstrations:

<p align="center">
  <video controls width="80%">
    <source src="/videos/projects/home_gardening_robot_2025/mimicking_arm_demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

*Video: Demonstration of the mimicking arm robot learning from human movements*

This feature allows:
- Recording of human movements to teach the robot new tasks
- Training of the arm robot based on the recorded motions
- Playback of learned movements for precise repetition of gardening tasks

## Technologies Used

- **Computer Vision**: OpenCV, PyTorch, custom transformer networks
- **Robotics**: ROS (Robot Operating System), custom control systems
- **Machine Learning**: CNN-based object detection, transformer networks
- **Hardware**: RGB-D cameras, robotic arms, mobile platforms, precision pumps
- **Integration**: IoT protocols, smart home APIs

## Research Impact

This project advances the field of robotic gardening by:

1. Demonstrating effective affordance detection in complex gardening environments
2. Providing a scalable solution for indoor agriculture in limited living spaces
3. Creating pathways for elderly or disabled individuals to maintain gardens
4. Contributing to sustainable urban farming practices through precision resource usage