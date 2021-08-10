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

export interface IRosTypeSensorMsgsBatteryState {
  POWER_SUPPLY_STATUS_UNKNOWN: number;
  POWER_SUPPLY_STATUS_CHARGING: number;
  POWER_SUPPLY_STATUS_DISCHARGING: number;
  POWER_SUPPLY_STATUS_NOT_CHARGING: number;
  POWER_SUPPLY_STATUS_FULL: number;
  POWER_SUPPLY_HEALTH_UNKNOWN: number;
  POWER_SUPPLY_HEALTH_GOOD: number;
  POWER_SUPPLY_HEALTH_OVERHEAT: number;
  POWER_SUPPLY_HEALTH_DEAD: number;
  POWER_SUPPLY_HEALTH_OVERVOLTAGE: number;
  POWER_SUPPLY_HEALTH_UNSPEC_FAILURE: number;
  POWER_SUPPLY_HEALTH_COLD: number;
  POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE: number;
  POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE: number;
  POWER_SUPPLY_TECHNOLOGY_UNKNOWN: number;
  POWER_SUPPLY_TECHNOLOGY_NIMH: number;
  POWER_SUPPLY_TECHNOLOGY_LION: number;
  POWER_SUPPLY_TECHNOLOGY_LIPO: number;
  POWER_SUPPLY_TECHNOLOGY_LIFE: number;
  POWER_SUPPLY_TECHNOLOGY_NICD: number;
  POWER_SUPPLY_TECHNOLOGY_LIMN: number;
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

export interface IRosTypeSensorMsgsCameraInfo {
  header: IRosTypeStdMsgsHeader;
  height: number;
  width: number;
  distortion_model: string;
  d: number[];
  k: number[];
  r: number[];
  p: number[];
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
  TYPE_LED: number;
  TYPE_RUMBLE: number;
  TYPE_BUZZER: number;
  type: number;
  id: number;
  intensity: number;
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
  COVARIANCE_TYPE_UNKNOWN: number;
  COVARIANCE_TYPE_APPROXIMATED: number;
  COVARIANCE_TYPE_DIAGONAL_KNOWN: number;
  COVARIANCE_TYPE_KNOWN: number;
  position_covariance_type: number;
}

export interface IRosTypeSensorMsgsNavSatStatus {
  STATUS_NO_FIX: number;
  STATUS_FIX: number;
  STATUS_SBAS_FIX: number;
  STATUS_GBAS_FIX: number;
  status: number;
  SERVICE_GPS: number;
  SERVICE_GLONASS: number;
  SERVICE_COMPASS: number;
  SERVICE_GALILEO: number;
  service: number;
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
  INT8: number;
  UINT8: number;
  INT16: number;
  UINT16: number;
  INT32: number;
  UINT32: number;
  FLOAT32: number;
  FLOAT64: number;
  name: string;
  offset: number;
  datatype: number;
  count: number;
}

export interface IRosTypeSensorMsgsRange {
  header: IRosTypeStdMsgsHeader;
  ULTRASOUND: number;
  INFRARED: number;
  radiation_type: number;
  field_of_view: number;
  min_range: number;
  max_range: number;
  range: number;
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

export interface IRosTypeSensorMsgsSetCameraInfoRequest {
  camera_info: IRosTypeSensorMsgsCameraInfo;
}

export interface IRosTypeSensorMsgsSetCameraInfoResponse {
  success: boolean;
  status_message: string;
}

export interface IRosTypeSensorMsgsTemperature {
  header: IRosTypeStdMsgsHeader;
  temperature: number;
  variance: number;
}

export interface IRosTypeSensorMsgsTimeReference {
  header: IRosTypeStdMsgsHeader;
  time_ref: number;
  source: string;
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

export interface IRosTypeStdMsgsEmpty {

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
  stamp: number;
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