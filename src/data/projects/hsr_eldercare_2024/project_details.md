# Empowering Elders: Autonomous Object Handling with HSR Robot (2024)

## Project Overview

Led the development of an integrated healthcare robotics system utilizing the Human Support Robot (HSR) for elderly care environments under the supervision of Professor Naoyuki Kubota at Tokyo Metropolitan University. The project focused on implementing autonomous object handling capabilities within assisted living settings to enhance elder independence and quality of life. Key focus areas included developing navigation algorithms specifically tailored for indoor assisted living environments, creating an intuitive user interface for robot control, and establishing effective human-robot interaction paradigms suitable for elderly users.

<p align="center">
  <video controls width="80%" style="max-width: 200px;">
    <source src="/videos/projects/hsr_eldercare_2024/minos_hsr_setup.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

## Key Contributions

- Designed and implemented a Docker-based development environment enabling HSR robot programming on macOS, overcoming compatibility challenges with ROS Noetic
- Developed interactive Jupyter Notebook interfaces for robot control, providing immediate feedback and facilitating rapid development iterations
- Created comprehensive object detection algorithms enabling the HSR to recognize and manipulate everyday items in assisted living environments
- Engineered specialized navigation routines for different mobility profiles, accommodating varying user abilities from fully mobile to wheelchair-bound
- Implemented ICF (International Classification of Functioning) staging visualization tools through ROS2Healthcare integration
- Established a framework for sequence-of-activities monitoring to assess and support daily living tasks

## Technical Architecture

<p align="center">
  <video controls width="80%">
    <source src="/videos/projects/hsr_eldercare_2024/ode_hsr_sim.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

*Figure: HSR simulation in ODE showing trajectory planning using topological mapping*

The system architecture is comprised of several integrated components:

1. **Development Framework**
   - Docker containerization for cross-platform compatibility
   - Jupyter Notebook interface for interactive development
   - Git-based version control through the hsr-demo-lab repository

2. **Robot Control Systems**
   - ROS Noetic implementation using Python and C++
   - Custom HSR robot API for simplified control integration
   - Real-time data processing and sensor fusion

3. **Navigation Components**
   - Specialized path planning for indoor environments
   - Obstacle avoidance with human-awareness parameters
   - Dynamic replanning based on environmental changes

4. **Object Interaction**
   - Computer vision for object recognition
   - Grasping algorithms for various household items
   - Force-feedback mechanisms for safe object handling

5. **Healthcare Integration**
   - ROS2Healthcare connectivity for medical data visualization
   - ICF staging implementation for patient assessment
   - Activity sequence monitoring and analysis

## Technical Skills Demonstrated

- ROS (Robot Operating System) implementation for complex robot control
- Docker containerization for cross-platform development
- Computer vision and machine learning for object detection
- Sensor fusion for environmental awareness
- Human-robot interaction design for elderly users
- Healthcare data integration and visualization
- Jupyter-based interactive development workflows

## Project Status and Testing

Currently, the project is in active development with initial testing conducted at Tokyo Metropolitan University's Minami Osawa campus. The system has demonstrated the ability to successfully navigate living spaces and perform basic object handling tasks. Key achievements and challenges include:

- Successful implementation of Docker-based development environment for macOS
- Functional robot control via Jupyter Notebook interface
- Initial testing of basic object grasping capabilities
- Navigation testing in simulated environments
- Ongoing challenges with API differences between simulation and real-world HSR robot
- Integration of robot capabilities with ICF healthcare staging

## Assisted Living Scenarios

The project is designed to support multiple types of users with varying abilities:

<p align="center"><img src="/images/projects/hsr_eldercare_2024/sequence_activities.webp" alt="Sequence of Activities Support" width="90%"></p>

*Figure: Sequence of Activities for different mobility profiles*

Four primary user profiles have been established:
1. **Mobile Elderly (Good Condition)** - Basic assistance with limited physical support
2. **Limited Mobility Elderly** - Enhanced support with walking aids integration
3. **Young Hemiplegic Patient (Good)** - Specialized support for one-sided limitations
4. **Young Hemiplegic Patient (Limited)** - Comprehensive assistance with assistive device integration

The HSR robot provides customized support across key activities:
- Wake-up assistance
- Bed transfer support
- Walking assistance
- Clothes changing aid
- Personal hygiene support
- Toilet use assistance

<p align="center">
  <video controls width="80%">
    <source src="/videos/projects/hsr_eldercare_2024/wakeup_hsr.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

*Figure: "Wake Up" scenario with the HSR robot next to the bed. It shows the robot in a realistic eldercare environment.*

## Technologies Used

- **Programming**: Python, C++, Jupyter Notebooks
- **Frameworks**: ROS Noetic, Docker
- **Computer Vision**: OpenCV, PyTorch
- **Healthcare Data**: ROS2Healthcare
- **Simulation**: Gazebo, ODE
- **Hardware**: Toyota HSR Robot
- **Version Control**: Git, GitHub
- **Development Tools**: VSCode, Jupyter

## Future Directions

Based on current progress, future work will focus on:

1. Refining the object manipulation capabilities for greater precision
2. Enhancing the user interface for elderly accessibility
3. Implementing more advanced navigation algorithms for complex indoor environments
4. Expanding the healthcare data integration for comprehensive patient monitoring
5. Conducting extensive real-world testing in actual assisted living facilities
6. Developing adaptive learning mechanisms to improve robot-user interactions over time