/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// These files were generated using "ros-typescript-generator"
export interface IRosTypeActionlibMsgsGoalId {
  stamp: { sec: number, nanosec: number };
  id: string;
}

export interface IRosTypeActionlibMsgsGoalStatus {
  goal_id: IRosTypeActionlibMsgsGoalId;
  status: number;
  text: string;
}

export enum IRosTypeActionlibMsgsGoalStatusConst {
  PENDING = 0,
  ACTIVE = 1,
  PREEMPTED = 2,
  SUCCEEDED = 3,
  ABORTED = 4,
  REJECTED = 5,
  PREEMPTING = 6,
  RECALLING = 7,
  RECALLED = 8,
  LOST = 9,
}

export interface IRosTypeActionlibMsgsGoalStatusArray {
  header: IRosTypeStdMsgsHeader;
  status_list: IRosTypeActionlibMsgsGoalStatus[];
}

export interface IRosTypeDiagnosticMsgsDiagnosticArray {
  header: IRosTypeStdMsgsHeader;
  status: IRosTypeDiagnosticMsgsDiagnosticStatus[];
}

export interface IRosTypeDiagnosticMsgsDiagnosticStatus {
  level: number;
  name: string;
  message: string;
  hardware_id: string;
  values: IRosTypeDiagnosticMsgsKeyValue[];
}

export enum IRosTypeDiagnosticMsgsDiagnosticStatusConst {
  OK = 0,
  WARN = 1,
  ERROR = 2,
  STALE = 3,
}

export interface IRosTypeDiagnosticMsgsKeyValue {
  key: string;
  value: string;
}

export interface IRosTypeExampleMsgsExample {
  D: number[];
  K: number[];
  R: number[];
  P: number[];
  binning_x: number;
  binning_y: number;
}

export interface IRosTypeGeometryMsgsAccel {
  linear: IRosTypeGeometryMsgsVector3;
  angular: IRosTypeGeometryMsgsVector3;
}

export interface IRosTypeGeometryMsgsAccelStamped {
  header: IRosTypeStdMsgsHeader;
  accel: IRosTypeGeometryMsgsAccel;
}

export interface IRosTypeGeometryMsgsAccelWithCovariance {
  accel: IRosTypeGeometryMsgsAccel;
  covariance: number[];
}

export interface IRosTypeGeometryMsgsAccelWithCovarianceStamped {
  header: IRosTypeStdMsgsHeader;
  accel: IRosTypeGeometryMsgsAccelWithCovariance;
}

export interface IRosTypeGeometryMsgsInertia {
  m: number;
  com: IRosTypeGeometryMsgsVector3;
  ixx: number;
  ixy: number;
  ixz: number;
  iyy: number;
  iyz: number;
  izz: number;
}

export interface IRosTypeGeometryMsgsInertiaStamped {
  header: IRosTypeStdMsgsHeader;
  inertia: IRosTypeGeometryMsgsInertia;
}

export interface IRosTypeGeometryMsgsPoint {
  x: number;
  y: number;
  z: number;
}

export interface IRosTypeGeometryMsgsPoint32 {
  x: number;
  y: number;
  z: number;
}

export interface IRosTypeGeometryMsgsPointStamped {
  header: IRosTypeStdMsgsHeader;
  point: IRosTypeGeometryMsgsPoint;
}

export interface IRosTypeGeometryMsgsPolygon {
  points: IRosTypeGeometryMsgsPoint32[];
}

export interface IRosTypeGeometryMsgsPolygonStamped {
  header: IRosTypeStdMsgsHeader;
  polygon: IRosTypeGeometryMsgsPolygon;
}

export interface IRosTypeGeometryMsgsPose {
  position: IRosTypeGeometryMsgsPoint;
  orientation: IRosTypeGeometryMsgsQuaternion;
}

export interface IRosTypeGeometryMsgsPose2D {
  x: number;
  y: number;
  theta: number;
}

export interface IRosTypeGeometryMsgsPoseArray {
  header: IRosTypeStdMsgsHeader;
  poses: IRosTypeGeometryMsgsPose[];
}

export interface IRosTypeGeometryMsgsPoseStamped {
  header: IRosTypeStdMsgsHeader;
  pose: IRosTypeGeometryMsgsPose;
}

export interface IRosTypeGeometryMsgsPoseWithCovariance {
  pose: IRosTypeGeometryMsgsPose;
  covariance: number[];
}

export interface IRosTypeGeometryMsgsPoseWithCovarianceStamped {
  header: IRosTypeStdMsgsHeader;
  pose: IRosTypeGeometryMsgsPoseWithCovariance;
}

export interface IRosTypeGeometryMsgsQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface IRosTypeGeometryMsgsQuaternionStamped {
  header: IRosTypeStdMsgsHeader;
  quaternion: IRosTypeGeometryMsgsQuaternion;
}

export interface IRosTypeGeometryMsgsTransform {
  translation: IRosTypeGeometryMsgsVector3;
  rotation: IRosTypeGeometryMsgsQuaternion;
}

export interface IRosTypeGeometryMsgsTransformStamped {
  header: IRosTypeStdMsgsHeader;
  child_frame_id: string;
  transform: IRosTypeGeometryMsgsTransform;
}

export interface IRosTypeGeometryMsgsTwist {
  linear: IRosTypeGeometryMsgsVector3;
  angular: IRosTypeGeometryMsgsVector3;
}

export interface IRosTypeGeometryMsgsTwistStamped {
  header: IRosTypeStdMsgsHeader;
  twist: IRosTypeGeometryMsgsTwist;
}

export interface IRosTypeGeometryMsgsTwistWithCovariance {
  twist: IRosTypeGeometryMsgsTwist;
  covariance: number[];
}

export interface IRosTypeGeometryMsgsTwistWithCovarianceStamped {
  header: IRosTypeStdMsgsHeader;
  twist: IRosTypeGeometryMsgsTwistWithCovariance;
}

export interface IRosTypeGeometryMsgsVector3 {
  x: number;
  y: number;
  z: number;
}

export interface IRosTypeGeometryMsgsVector3Stamped {
  header: IRosTypeStdMsgsHeader;
  vector: IRosTypeGeometryMsgsVector3;
}

export interface IRosTypeGeometryMsgsWrench {
  force: IRosTypeGeometryMsgsVector3;
  torque: IRosTypeGeometryMsgsVector3;
}

export interface IRosTypeGeometryMsgsWrenchStamped {
  header: IRosTypeStdMsgsHeader;
  wrench: IRosTypeGeometryMsgsWrench;
}

export interface IRosTypeNavMsgsGetMapAction {
  action_goal: IRosTypeNavMsgsGetMapActionGoal;
  action_result: IRosTypeNavMsgsGetMapActionResult;
  action_feedback: IRosTypeNavMsgsGetMapActionFeedback;
}

export interface IRosTypeNavMsgsGetMapActionFeedback {
  header: IRosTypeStdMsgsHeader;
  status: IRosTypeActionlibMsgsGoalStatus;
  feedback: IRosTypeNavMsgsGetMapFeedback;
}

export interface IRosTypeNavMsgsGetMapActionGoal {
  header: IRosTypeStdMsgsHeader;
  goal_id: IRosTypeActionlibMsgsGoalId;
  goal: IRosTypeNavMsgsGetMapGoal;
}

export interface IRosTypeNavMsgsGetMapActionResult {
  header: IRosTypeStdMsgsHeader;
  status: IRosTypeActionlibMsgsGoalStatus;
  result: IRosTypeNavMsgsGetMapResult;
}

export interface IRosTypeNavMsgsGetMapResult {
  map: IRosTypeNavMsgsOccupancyGrid;
}

export interface IRosTypeNavMsgsGridCells {
  header: IRosTypeStdMsgsHeader;
  cell_width: number;
  cell_height: number;
  cells: IRosTypeGeometryMsgsPoint[];
}

export interface IRosTypeNavMsgsMapMetaData {
  map_load_time: { sec: number, nanosec: number };
  resolution: number;
  width: number;
  height: number;
  origin: IRosTypeGeometryMsgsPose;
}

export interface IRosTypeNavMsgsOccupancyGrid {
  header: IRosTypeStdMsgsHeader;
  info: IRosTypeNavMsgsMapMetaData;
  data: number[];
}

export interface IRosTypeNavMsgsOdometry {
  header: IRosTypeStdMsgsHeader;
  child_frame_id: string;
  pose: IRosTypeGeometryMsgsPoseWithCovariance;
  twist: IRosTypeGeometryMsgsTwistWithCovariance;
}

export interface IRosTypeNavMsgsPath {
  header: IRosTypeStdMsgsHeader;
  poses: IRosTypeGeometryMsgsPoseStamped[];
}

export interface IRosTypeRosgraphMsgsClock {
  clock: { sec: number, nanosec: number };
}

export interface IRosTypeRosgraphMsgsLog {
  header: IRosTypeStdMsgsHeader;
  level: number;
  name: string;
  msg: string;
  file: string;
  function: string;
  line: number;
  topics: string[];
}

export enum IRosTypeRosgraphMsgsLogConst {
  DEBUG = 1,
  INFO = 2,
  WARN = 4,
  ERROR = 8,
  FATAL = 16,
}

export interface IRosTypeRosgraphMsgsTopicStatistics {
  topic: string;
  node_pub: string;
  node_sub: string;
  window_start: { sec: number, nanosec: number };
  window_stop: { sec: number, nanosec: number };
  delivered_msgs: number;
  dropped_msgs: number;
  traffic: number;
  period_mean: number;
  period_stddev: number;
  period_max: number;
  stamp_age_mean: number;
  stamp_age_stddev: number;
  stamp_age_max: number;
}

export interface IRosTypeSensorMsgsBatteryState {
  header: IRosTypeStdMsgsHeader;
  voltage: number;
  temperature: number;
  current: number;
  charge: number;
  capacity: number;
  design_capacity: number;
  percentage: number;
  power_supply_status: number;
  power_supply_health: number;
  power_supply_technology: number;
  present: boolean;
  cell_voltage: number[];
  cell_temperature: number[];
  location: string;
  serial_number: string;
}

export enum IRosTypeSensorMsgsBatteryStateConst {
  POWER_SUPPLY_STATUS_UNKNOWN = 0,
  POWER_SUPPLY_STATUS_CHARGING = 1,
  POWER_SUPPLY_STATUS_DISCHARGING = 2,
  POWER_SUPPLY_STATUS_NOT_CHARGING = 3,
  POWER_SUPPLY_STATUS_FULL = 4,
  POWER_SUPPLY_HEALTH_UNKNOWN = 0,
  POWER_SUPPLY_HEALTH_GOOD = 1,
  POWER_SUPPLY_HEALTH_OVERHEAT = 2,
  POWER_SUPPLY_HEALTH_DEAD = 3,
  POWER_SUPPLY_HEALTH_OVERVOLTAGE = 4,
  POWER_SUPPLY_HEALTH_UNSPEC_FAILURE = 5,
  POWER_SUPPLY_HEALTH_COLD = 6,
  POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE = 7,
  POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE = 8,
  POWER_SUPPLY_TECHNOLOGY_UNKNOWN = 0,
  POWER_SUPPLY_TECHNOLOGY_NIMH = 1,
  POWER_SUPPLY_TECHNOLOGY_LION = 2,
  POWER_SUPPLY_TECHNOLOGY_LIPO = 3,
  POWER_SUPPLY_TECHNOLOGY_LIFE = 4,
  POWER_SUPPLY_TECHNOLOGY_NICD = 5,
  POWER_SUPPLY_TECHNOLOGY_LIMN = 6,
}

export interface IRosTypeSensorMsgsCameraInfo {
  header: IRosTypeStdMsgsHeader;
  height: number;
  width: number;
  distortion_model: string;
  D: number[];
  K: number[];
  R: number[];
  P: number[];
  binning_x: number;
  binning_y: number;
  roi: IRosTypeSensorMsgsRegionOfInterest;
}

export interface IRosTypeSensorMsgsChannelFloat32 {
  name: string;
  values: number[];
}

export interface IRosTypeSensorMsgsCompressedImage {
  header: IRosTypeStdMsgsHeader;
  format: string;
  data: number[];
}

export interface IRosTypeSensorMsgsFluidPressure {
  header: IRosTypeStdMsgsHeader;
  fluid_pressure: number;
  variance: number;
}

export interface IRosTypeSensorMsgsIlluminance {
  header: IRosTypeStdMsgsHeader;
  illuminance: number;
  variance: number;
}

export interface IRosTypeSensorMsgsImage {
  header: IRosTypeStdMsgsHeader;
  height: number;
  width: number;
  encoding: string;
  is_bigendian: number;
  step: number;
  data: number[];
}

export interface IRosTypeSensorMsgsImu {
  header: IRosTypeStdMsgsHeader;
  orientation: IRosTypeGeometryMsgsQuaternion;
  orientation_covariance: number[];
  angular_velocity: IRosTypeGeometryMsgsVector3;
  angular_velocity_covariance: number[];
  linear_acceleration: IRosTypeGeometryMsgsVector3;
  linear_acceleration_covariance: number[];
}

export interface IRosTypeSensorMsgsJointState {
  header: IRosTypeStdMsgsHeader;
  name: string[];
  position: number[];
  velocity: number[];
  effort: number[];
}

export interface IRosTypeSensorMsgsJoy {
  header: IRosTypeStdMsgsHeader;
  axes: number[];
  buttons: number[];
}

export interface IRosTypeSensorMsgsJoyFeedback {
  type: number;
  id: number;
  intensity: number;
}

export enum IRosTypeSensorMsgsJoyFeedbackConst {
  TYPE_LED = 0,
  TYPE_RUMBLE = 1,
  TYPE_BUZZER = 2,
}

export interface IRosTypeSensorMsgsJoyFeedbackArray {
  array: IRosTypeSensorMsgsJoyFeedback[];
}

export interface IRosTypeSensorMsgsLaserEcho {
  echoes: number[];
}

export interface IRosTypeSensorMsgsLaserScan {
  header: IRosTypeStdMsgsHeader;
  angle_min: number;
  angle_max: number;
  angle_increment: number;
  time_increment: number;
  scan_time: number;
  range_min: number;
  range_max: number;
  ranges: number[];
  intensities: number[];
}

export interface IRosTypeSensorMsgsMagneticField {
  header: IRosTypeStdMsgsHeader;
  magnetic_field: IRosTypeGeometryMsgsVector3;
  magnetic_field_covariance: number[];
}

export interface IRosTypeSensorMsgsMultiDofJointState {
  header: IRosTypeStdMsgsHeader;
  joint_names: string[];
  transforms: IRosTypeGeometryMsgsTransform[];
  twist: IRosTypeGeometryMsgsTwist[];
  wrench: IRosTypeGeometryMsgsWrench[];
}

export interface IRosTypeSensorMsgsMultiEchoLaserScan {
  header: IRosTypeStdMsgsHeader;
  angle_min: number;
  angle_max: number;
  angle_increment: number;
  time_increment: number;
  scan_time: number;
  range_min: number;
  range_max: number;
  ranges: IRosTypeSensorMsgsLaserEcho[];
  intensities: IRosTypeSensorMsgsLaserEcho[];
}

export interface IRosTypeSensorMsgsNavSatFix {
  header: IRosTypeStdMsgsHeader;
  status: IRosTypeSensorMsgsNavSatStatus;
  latitude: number;
  longitude: number;
  altitude: number;
  position_covariance: number[];
  position_covariance_type: number;
}

export enum IRosTypeSensorMsgsNavSatFixConst {
  COVARIANCE_TYPE_UNKNOWN = 0,
  COVARIANCE_TYPE_APPROXIMATED = 1,
  COVARIANCE_TYPE_DIAGONAL_KNOWN = 2,
  COVARIANCE_TYPE_KNOWN = 3,
}

export interface IRosTypeSensorMsgsNavSatStatus {
  status: number;
  service: number;
}

export enum IRosTypeSensorMsgsNavSatStatusConst {
  STATUS_NO_FIX = -1,
  STATUS_FIX = 0,
  STATUS_SBAS_FIX = 1,
  STATUS_GBAS_FIX = 2,
  SERVICE_GPS = 1,
  SERVICE_GLONASS = 2,
  SERVICE_COMPASS = 4,
  SERVICE_GALILEO = 8,
}

export interface IRosTypeSensorMsgsPointCloud {
  header: IRosTypeStdMsgsHeader;
  points: IRosTypeGeometryMsgsPoint32[];
  channels: IRosTypeSensorMsgsChannelFloat32[];
}

export interface IRosTypeSensorMsgsPointCloud2 {
  header: IRosTypeStdMsgsHeader;
  height: number;
  width: number;
  fields: IRosTypeSensorMsgsPointField[];
  is_bigendian: boolean;
  point_step: number;
  row_step: number;
  data: number[];
  is_dense: boolean;
}

export interface IRosTypeSensorMsgsPointField {
  name: string;
  offset: number;
  datatype: number;
  count: number;
}

export enum IRosTypeSensorMsgsPointFieldConst {
  INT8 = 1,
  UINT8 = 2,
  INT16 = 3,
  UINT16 = 4,
  INT32 = 5,
  UINT32 = 6,
  FLOAT32 = 7,
  FLOAT64 = 8,
}

export interface IRosTypeSensorMsgsRange {
  header: IRosTypeStdMsgsHeader;
  radiation_type: number;
  field_of_view: number;
  min_range: number;
  max_range: number;
  range: number;
}

export enum IRosTypeSensorMsgsRangeConst {
  ULTRASOUND = 0,
  INFRARED = 1,
}

export interface IRosTypeSensorMsgsRegionOfInterest {
  x_offset: number;
  y_offset: number;
  height: number;
  width: number;
  do_rectify: boolean;
}

export interface IRosTypeSensorMsgsRelativeHumidity {
  header: IRosTypeStdMsgsHeader;
  relative_humidity: number;
  variance: number;
}

export interface IRosTypeSensorMsgsTemperature {
  header: IRosTypeStdMsgsHeader;
  temperature: number;
  variance: number;
}

export interface IRosTypeSensorMsgsTimeReference {
  header: IRosTypeStdMsgsHeader;
  time_ref: { sec: number, nanosec: number };
  source: string;
}

export interface IRosTypeShapeMsgsMesh {
  triangles: IRosTypeShapeMsgsMeshTriangle[];
  vertices: IRosTypeGeometryMsgsPoint[];
}

export interface IRosTypeShapeMsgsMeshTriangle {
  vertex_indices: number[];
}

export interface IRosTypeShapeMsgsPlane {
  coef: number[];
}

export interface IRosTypeShapeMsgsSolidPrimitive {
  type: number;
  dimensions: number[];
}

export enum IRosTypeShapeMsgsSolidPrimitiveConst {
  BOX = 1,
  SPHERE = 2,
  CYLINDER = 3,
  CONE = 4,
  BOX_X = 0,
  BOX_Y = 1,
  BOX_Z = 2,
  SPHERE_RADIUS = 0,
  CYLINDER_HEIGHT = 0,
  CYLINDER_RADIUS = 1,
  CONE_HEIGHT = 0,
  CONE_RADIUS = 1,
}

export interface IRosTypeStdMsgsBool {
  data: boolean;
}

export interface IRosTypeStdMsgsByte {
  data: number;
}

export interface IRosTypeStdMsgsByteMultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsChar {
  data: number;
}

export interface IRosTypeStdMsgsColorRgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface IRosTypeStdMsgsDuration {
  data: number;
}

export interface IRosTypeStdMsgsFloat32 {
  data: number;
}

export interface IRosTypeStdMsgsFloat32MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsFloat64 {
  data: number;
}

export interface IRosTypeStdMsgsFloat64MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsHeader {
  seq: number;
  stamp: { sec: number, nanosec: number };
  frame_id: string;
}

export interface IRosTypeStdMsgsInt16 {
  data: number;
}

export interface IRosTypeStdMsgsInt16MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsInt32 {
  data: number;
}

export interface IRosTypeStdMsgsInt32MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsInt64 {
  data: number;
}

export interface IRosTypeStdMsgsInt64MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsInt8 {
  data: number;
}

export interface IRosTypeStdMsgsInt8MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsMultiArrayDimension {
  label: string;
  size: number;
  stride: number;
}

export interface IRosTypeStdMsgsMultiArrayLayout {
  dim: IRosTypeStdMsgsMultiArrayDimension[];
  data_offset: number;
}

export interface IRosTypeStdMsgsString {
  data: string;
}

export interface IRosTypeStdMsgsTime {
  data: { sec: number, nanosec: number };
}

export interface IRosTypeStdMsgsUInt16 {
  data: number;
}

export interface IRosTypeStdMsgsUInt16MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsUInt32 {
  data: number;
}

export interface IRosTypeStdMsgsUInt32MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsUInt64 {
  data: number;
}

export interface IRosTypeStdMsgsUInt64MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStdMsgsUInt8 {
  data: number;
}

export interface IRosTypeStdMsgsUInt8MultiArray {
  layout: IRosTypeStdMsgsMultiArrayLayout;
  data: number[];
}

export interface IRosTypeStereoMsgsDisparityImage {
  header: IRosTypeStdMsgsHeader;
  image: IRosTypeSensorMsgsImage;
  f: number;
  T: number;
  valid_window: IRosTypeSensorMsgsRegionOfInterest;
  min_disparity: number;
  max_disparity: number;
  delta_d: number;
}

export interface IRosTypeTrajectoryMsgsJointTrajectory {
  header: IRosTypeStdMsgsHeader;
  joint_names: string[];
  points: IRosTypeTrajectoryMsgsJointTrajectoryPoint[];
}

export interface IRosTypeTrajectoryMsgsJointTrajectoryPoint {
  positions: number[];
  velocities: number[];
  accelerations: number[];
  effort: number[];
  time_from_start: number;
}

export interface IRosTypeTrajectoryMsgsMultiDofJointTrajectory {
  header: IRosTypeStdMsgsHeader;
  joint_names: string[];
  points: IRosTypeTrajectoryMsgsMultiDofJointTrajectoryPoint[];
}

export interface IRosTypeTrajectoryMsgsMultiDofJointTrajectoryPoint {
  transforms: IRosTypeGeometryMsgsTransform[];
  velocities: IRosTypeGeometryMsgsTwist[];
  accelerations: IRosTypeGeometryMsgsTwist[];
  time_from_start: number;
}

export interface IRosTypeVisualizationMsgsImageMarker {
  header: IRosTypeStdMsgsHeader;
  ns: string;
  id: number;
  type: number;
  action: number;
  position: IRosTypeGeometryMsgsPoint;
  scale: number;
  outline_color: IRosTypeStdMsgsColorRgba;
  filled: number;
  fill_color: IRosTypeStdMsgsColorRgba;
  lifetime: number;
  points: IRosTypeGeometryMsgsPoint[];
  outline_colors: IRosTypeStdMsgsColorRgba[];
}

export enum IRosTypeVisualizationMsgsImageMarkerConst {
  CIRCLE = 0,
  LINE_STRIP = 1,
  LINE_LIST = 2,
  POLYGON = 3,
  POINTS = 4,
  ADD = 0,
  REMOVE = 1,
}

export interface IRosTypeVisualizationMsgsInteractiveMarker {
  header: IRosTypeStdMsgsHeader;
  pose: IRosTypeGeometryMsgsPose;
  name: string;
  description: string;
  scale: number;
  menu_entries: IRosTypeVisualizationMsgsMenuEntry[];
  controls: IRosTypeVisualizationMsgsInteractiveMarkerControl[];
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerControl {
  name: string;
  orientation: IRosTypeGeometryMsgsQuaternion;
  orientation_mode: number;
  interaction_mode: number;
  always_visible: boolean;
  markers: IRosTypeVisualizationMsgsMarker[];
  independent_marker_orientation: boolean;
  description: string;
}

export enum IRosTypeVisualizationMsgsInteractiveMarkerControlConst {
  INHERIT = 0,
  FIXED = 1,
  VIEW_FACING = 2,
  NONE = 0,
  MENU = 1,
  BUTTON = 2,
  MOVE_AXIS = 3,
  MOVE_PLANE = 4,
  ROTATE_AXIS = 5,
  MOVE_ROTATE = 6,
  MOVE_3D = 7,
  ROTATE_3D = 8,
  MOVE_ROTATE_3D = 9,
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerFeedback {
  header: IRosTypeStdMsgsHeader;
  client_id: string;
  marker_name: string;
  control_name: string;
  event_type: number;
  pose: IRosTypeGeometryMsgsPose;
  menu_entry_id: number;
  mouse_point: IRosTypeGeometryMsgsPoint;
  mouse_point_valid: boolean;
}

export enum IRosTypeVisualizationMsgsInteractiveMarkerFeedbackConst {
  KEEP_ALIVE = 0,
  POSE_UPDATE = 1,
  MENU_SELECT = 2,
  BUTTON_CLICK = 3,
  MOUSE_DOWN = 4,
  MOUSE_UP = 5,
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerInit {
  server_id: string;
  seq_num: number;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerPose {
  header: IRosTypeStdMsgsHeader;
  pose: IRosTypeGeometryMsgsPose;
  name: string;
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerUpdate {
  server_id: string;
  seq_num: number;
  type: number;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
  poses: IRosTypeVisualizationMsgsInteractiveMarkerPose[];
  erases: string[];
}

export enum IRosTypeVisualizationMsgsInteractiveMarkerUpdateConst {
  KEEP_ALIVE = 0,
  UPDATE = 1,
}

export interface IRosTypeVisualizationMsgsMarker {
  header: IRosTypeStdMsgsHeader;
  ns: string;
  id: number;
  type: number;
  action: number;
  pose: IRosTypeGeometryMsgsPose;
  scale: IRosTypeGeometryMsgsVector3;
  color: IRosTypeStdMsgsColorRgba;
  lifetime: number;
  frame_locked: boolean;
  points: IRosTypeGeometryMsgsPoint[];
  colors: IRosTypeStdMsgsColorRgba[];
  text: string;
  mesh_resource: string;
  mesh_use_embedded_materials: boolean;
}

export enum IRosTypeVisualizationMsgsMarkerConst {
  ARROW = 0,
  CUBE = 1,
  SPHERE = 2,
  CYLINDER = 3,
  LINE_STRIP = 4,
  LINE_LIST = 5,
  CUBE_LIST = 6,
  SPHERE_LIST = 7,
  POINTS = 8,
  TEXT_VIEW_FACING = 9,
  MESH_RESOURCE = 10,
  TRIANGLE_LIST = 11,
  ADD = 0,
  MODIFY = 0,
  DELETE = 2,
  DELETEALL = 3,
}

export interface IRosTypeVisualizationMsgsMarkerArray {
  markers: IRosTypeVisualizationMsgsMarker[];
}

export interface IRosTypeVisualizationMsgsMenuEntry {
  id: number;
  parent_id: number;
  title: string;
  command: string;
  command_type: number;
}

export enum IRosTypeVisualizationMsgsMenuEntryConst {
  FEEDBACK = 0,
  ROSRUN = 1,
  ROSLAUNCH = 2,
}