import React from 'react';
import ImageGallery from 'react-image-gallery';
import erosImages from '../../../data/projects/eros/erosImages';

const ProjectOverview = () => (
  <div className="project-overview">
    <div className="link-to" id="project overview" />
    <h3>Project Overview</h3>
    {/* Image Gallery with fixed configuration */}
    <div className="eros-gallery-container">
      <ImageGallery
        items={erosImages}
        showPlayButton
        showFullscreenButton
        slideInterval={5000}
        autoPlay={false}
        showThumbnails
        slideDuration={450}
        slideOnThumbnailOver={false}
        useBrowserFullscreen
        showNav
        showBullets={false}
        showIndex
        thumbnailPosition="bottom"
        disableThumbnailScroll={false}
        disableKeyDown={false}
        additionalClass="eros-gallery"
      />
    </div>
    <h4>Humanoid Soccer Robot Project - PENS (2016-2024)</h4>
    <p><strong>Source funding:</strong> Sponsors and Politeknik Elektronika Negeri Surabaya</p>
    <h5>Project Overview</h5>
    <p>
      Led and supervised the development of EROS (Electronic Robot Soccer), a sophisticated humanoid
      robot soccer team at Politeknik Elektronika Negeri Surabaya. The project focused on creating
      autonomous humanoid robots capable of competing in RoboCup and national competitions,
      addressing complex challenges in computer vision, machine learning, and robotics.
      The team&apos;s research and development contributed to advancements in humanoid robotics
      while achieving significant competitive success both nationally and internationally.
    </p>
    <h5>Key Contributions</h5>
    <ul>
      <li>
        Directed the development of a robust visual perception system for humanoid robots, improving
        field navigation, ball detection, and opponent recognition capabilities
      </li>
      <li>
        Pioneered a two-step localization approach utilizing Kalman filters and robot kinematics
        joint odometry for efficient robot positioning during competitions
      </li>
      <li>
        Implemented IMU-based balanced motion controls using ROS (Robot Operating System) to enhance
        stability and maneuverability on uneven playing surfaces
      </li>
      <li>
        Developed innovative balance recovery techniques through slight movement adjustments,
        significantly reducing fall incidents during matches
      </li>
      <li>
        Engineered omnidirectional motion and velocity input systems to improve robot agility
        and responsiveness
      </li>
      <li>
        Mentored student teams through multiple iterations of hardware and software improvements,
        resulting in award-winning robot designs
      </li>
    </ul>
    <h5>Technical Skills Demonstrated</h5>
    <ul>
      <li>
        Advanced computer vision techniques including CNN-based object detection,
        color segmentation, and image morphology
      </li>
      <li>Machine learning implementation for real-time field and ball detection</li>
      <li>
        Robotics control systems including PID controllers, IMU integration,
        and balance optimization
      </li>
      <li>Real-time sensor fusion for improved environmental awareness</li>
      <li>Robot Operating System (ROS) implementation for distributed robot control</li>
      <li>Embedded systems programming for resource-constrained platforms</li>
      <li>Mechanical design optimization for stability and performance</li>
    </ul>
    <h5>Technologies Used</h5>
    <ul>
      <li>
        <strong>Computer Vision:</strong> OpenCV, Convolutional Neural Networks,
        custom feature detection algorithms
      </li>
      <li><strong>Programming:</strong> Python, C++, ROS (Robot Operating System)</li>
      <li>
        <strong>Machine Learning:</strong> TensorFlow, PyTorch,
        custom implementations for real-time applications
      </li>
      <li>
        <strong>Embedded Systems:</strong> Arduino, Raspberry Pi, custom microcontroller solutions
      </li>
      <li><strong>Sensors:</strong> IMU (Inertial Measurement Units), cameras, pressure sensors</li>
      <li>
        <strong>Mechanical Design:</strong> 3D modeling, servo motor systems, custom actuators
      </li>
      <li><strong>Simulation Tools:</strong> Gazebo simulator, URDF modeling</li>
    </ul>
  </div>
);

export default ProjectOverview;
