/* eslint-disable */
// These files were generated using "ros-typescript-generator"
export interface IRosTypeActionMsgsCancelGoal {
  request: IRosTypeActionMsgsCancelGoalRequest;
  response: IRosTypeActionMsgsCancelGoalResponse;
}

export interface IRosTypeActionMsgsCancelGoalRequest {
  goal_info: IRosTypeActionMsgsGoalInfo;
}

export interface IRosTypeActionMsgsCancelGoalResponse {
  return_code: IRosTypeActionMsgsCancelGoalResponseReturnCode;
  goals_canceling: IRosTypeActionMsgsGoalInfo[];
}

export enum IRosTypeActionMsgsCancelGoalResponseReturnCode {
  ERROR_NONE = 0,
  ERROR_REJECTED = 1,
  ERROR_UNKNOWN_GOAL_ID = 2,
  ERROR_GOAL_TERMINATED = 3,
}

export interface IRosTypeActionMsgsGoalInfo {
  goal_id: IRosTypeUniqueIdentifierMsgsUuid;
  stamp: { sec: number, nanosec: number };
}

export interface IRosTypeActionMsgsGoalStatus {
  goal_info: IRosTypeActionMsgsGoalInfo;
  status: IRosTypeActionMsgsGoalStatusStatus;
}

export enum IRosTypeActionMsgsGoalStatusStatus {
  STATUS_UNKNOWN = 0,
  STATUS_ACCEPTED = 1,
  STATUS_EXECUTING = 2,
  STATUS_CANCELING = 3,
  STATUS_SUCCEEDED = 4,
  STATUS_CANCELED = 5,
  STATUS_ABORTED = 6,
}

export interface IRosTypeActionMsgsGoalStatusArray {
  status_list: IRosTypeActionMsgsGoalStatus[];
}

export interface IRosTypeActionlibMsgsGoalId {
  stamp: { sec: number, nanosec: number };
  id: string;
}

export interface IRosTypeActionlibMsgsGoalStatus {
  goal_id: IRosTypeActionlibMsgsGoalId;
  status: IRosTypeActionlibMsgsGoalStatusStatus;
  text: string;
}

export enum IRosTypeActionlibMsgsGoalStatusStatus {
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

export interface IRosTypeAutomotivePlatformMsgsAdaptiveCruiseControlCommand {
  header: IRosTypeStdMsgsHeader;
  msg_counter: number;
  set_speed: number;
  set: number;
  resume: number;
  cancel: number;
  speed_up: number;
  slow_down: number;
  further: number;
  closer: number;
}

export interface IRosTypeAutomotivePlatformMsgsAdaptiveCruiseControlSettings {
  header: IRosTypeStdMsgsHeader;
  set_speed: number;
  following_spot: number;
  min_percent: number;
  step_percent: number;
  cipv_percent: number;
  max_distance: number;
}

export interface IRosTypeAutomotivePlatformMsgsBlindSpotIndicators {
  header: IRosTypeStdMsgsHeader;
  left: boolean;
  right: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsBrakeCommand {
  header: IRosTypeStdMsgsHeader;
  brake_pedal: number;
}

export interface IRosTypeAutomotivePlatformMsgsBrakeFeedback {
  header: IRosTypeStdMsgsHeader;
  brake_pedal: number;
}

export interface IRosTypeAutomotivePlatformMsgsCabinReport {
  header: IRosTypeStdMsgsHeader;
  door_open_front_right: boolean;
  door_open_front_left: boolean;
  door_open_rear_right: boolean;
  door_open_rear_left: boolean;
  hood_open: boolean;
  trunk_open: boolean;
  passenger_present: boolean;
  passenger_airbag_enabled: boolean;
  seatbelt_engaged_driver: boolean;
  seatbelt_engaged_passenger: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsCurvatureFeedback {
  header: IRosTypeStdMsgsHeader;
  curvature: number;
}

export interface IRosTypeAutomotivePlatformMsgsDriverCommands {
  msg_counter: number;
  engage: number;
  disengage: number;
  speed_up: number;
  slow_down: number;
  further: number;
  closer: number;
  right_turn: number;
  left_turn: number;
}

export interface IRosTypeAutomotivePlatformMsgsGear {
  gear: IRosTypeAutomotivePlatformMsgsGearGear;
}

export enum IRosTypeAutomotivePlatformMsgsGearGear {
  NONE = 0,
  PARK = 1,
  REVERSE = 2,
  NEUTRAL = 3,
  DRIVE = 4,
  LOW = 5,
}

export interface IRosTypeAutomotivePlatformMsgsGearCommand {
  header: IRosTypeStdMsgsHeader;
  command: IRosTypeAutomotivePlatformMsgsGear;
}

export interface IRosTypeAutomotivePlatformMsgsGearFeedback {
  header: IRosTypeStdMsgsHeader;
  current_gear: IRosTypeAutomotivePlatformMsgsGear;
}

export interface IRosTypeAutomotivePlatformMsgsHillStartAssist {
  header: IRosTypeStdMsgsHeader;
  active: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsSpeed {
  header: IRosTypeStdMsgsHeader;
  module_name: string;
  speed: number;
  acceleration_limit: number;
  deceleration_limit: number;
}

export interface IRosTypeAutomotivePlatformMsgsSpeedMode {
  header: IRosTypeStdMsgsHeader;
  mode: number;
  speed: number;
  acceleration_limit: number;
  deceleration_limit: number;
}

export interface IRosTypeAutomotivePlatformMsgsSpeedPedals {
  header: IRosTypeStdMsgsHeader;
  mode: number;
  throttle: number;
  brake: number;
}

export interface IRosTypeAutomotivePlatformMsgsSteer {
  header: IRosTypeStdMsgsHeader;
  module_name: string;
  curvature: number;
  max_curvature_rate: number;
}

export interface IRosTypeAutomotivePlatformMsgsSteerMode {
  header: IRosTypeStdMsgsHeader;
  mode: number;
  curvature: number;
  max_curvature_rate: number;
}

export interface IRosTypeAutomotivePlatformMsgsSteerWheel {
  header: IRosTypeStdMsgsHeader;
  mode: number;
  angle: number;
  angle_velocity: number;
}

export interface IRosTypeAutomotivePlatformMsgsSteeringCommand {
  header: IRosTypeStdMsgsHeader;
  steering_wheel_angle: number;
}

export interface IRosTypeAutomotivePlatformMsgsSteeringFeedback {
  header: IRosTypeStdMsgsHeader;
  steering_wheel_angle: number;
}

export interface IRosTypeAutomotivePlatformMsgsThrottleCommand {
  header: IRosTypeStdMsgsHeader;
  throttle_pedal: number;
}

export interface IRosTypeAutomotivePlatformMsgsThrottleFeedback {
  header: IRosTypeStdMsgsHeader;
  throttle_pedal: number;
}

export interface IRosTypeAutomotivePlatformMsgsTurnSignalCommand {
  header: IRosTypeStdMsgsHeader;
  mode: number;
  turn_signal: IRosTypeAutomotivePlatformMsgsTurnSignalCommandTurnSignal;
}

export enum IRosTypeAutomotivePlatformMsgsTurnSignalCommandTurnSignal {
  NONE = 0,
  LEFT = 1,
  RIGHT = 2,
}

export interface IRosTypeAutomotivePlatformMsgsUserInputAdas {
  header: IRosTypeStdMsgsHeader;
  btn_cc_on: boolean;
  btn_cc_off: boolean;
  btn_cc_on_off: boolean;
  btn_cc_set_inc: boolean;
  btn_cc_set_dec: boolean;
  btn_cc_res: boolean;
  btn_cc_cncl: boolean;
  btn_cc_res_cncl: boolean;
  btn_acc_gap_inc: boolean;
  btn_acc_gap_dec: boolean;
  btn_lka_on: boolean;
  btn_lka_off: boolean;
  btn_lka_on_off: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsUserInputMedia {
  header: IRosTypeStdMsgsHeader;
  btn_vol_up: boolean;
  btn_vol_down: boolean;
  btn_mute: boolean;
  btn_next: boolean;
  btn_prev: boolean;
  btn_next_hang_up: boolean;
  btn_prev_answer: boolean;
  btn_hang_up: boolean;
  btn_answer: boolean;
  btn_play: boolean;
  btn_pause: boolean;
  btn_play_pause: boolean;
  btn_mode: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsUserInputMenus {
  header: IRosTypeStdMsgsHeader;
  str_whl_left_btn_left: boolean;
  str_whl_left_btn_down: boolean;
  str_whl_left_btn_right: boolean;
  str_whl_left_btn_up: boolean;
  str_whl_left_btn_ok: boolean;
  str_whl_right_btn_left: boolean;
  str_whl_right_btn_down: boolean;
  str_whl_right_btn_right: boolean;
  str_whl_right_btn_up: boolean;
  str_whl_right_btn_ok: boolean;
  cntr_cons_btn_left: boolean;
  cntr_cons_btn_down: boolean;
  cntr_cons_btn_right: boolean;
  cntr_cons_btn_up: boolean;
  cntr_cons_btn_ok: boolean;
}

export interface IRosTypeAutomotivePlatformMsgsVelocityAccel {
  header: IRosTypeStdMsgsHeader;
  velocity: number;
  accleration: number;
}

export interface IRosTypeAutomotivePlatformMsgsVelocityAccelCov {
  header: IRosTypeStdMsgsHeader;
  velocity: number;
  accleration: number;
  covariance: number;
}

export interface IRosTypeCanMsgsFrame {
  header: IRosTypeStdMsgsHeader;
  id: number;
  is_rtr: boolean;
  is_extended: boolean;
  is_error: boolean;
  dlc: number;
  data: number[];
}

export interface IRosTypeDiagnosticMsgsAddDiagnostics {
  request: IRosTypeDiagnosticMsgsAddDiagnosticsRequest;
  response: IRosTypeDiagnosticMsgsAddDiagnosticsResponse;
}

export interface IRosTypeDiagnosticMsgsAddDiagnosticsRequest {
  load_namespace: string;
}

export interface IRosTypeDiagnosticMsgsAddDiagnosticsResponse {
  success: boolean;
  message: string;
}

export interface IRosTypeDiagnosticMsgsDiagnosticArray {
  header: IRosTypeStdMsgsHeader;
  status: IRosTypeDiagnosticMsgsDiagnosticStatus[];
}

export interface IRosTypeDiagnosticMsgsDiagnosticStatus {
  level: IRosTypeDiagnosticMsgsDiagnosticStatusLevel;
  name: string;
  message: string;
  hardware_id: string;
  values: IRosTypeDiagnosticMsgsKeyValue[];
}

export enum IRosTypeDiagnosticMsgsDiagnosticStatusLevel {
  OK = 0,
  WARN = 1,
  ERROR = 2,
  STALE = 3,
}

export interface IRosTypeDiagnosticMsgsKeyValue {
  key: string;
  value: string;
}

export interface IRosTypeDiagnosticMsgsSelfTest {
  response: IRosTypeDiagnosticMsgsSelfTestResponse;
}

export interface IRosTypeDiagnosticMsgsSelfTestResponse {
  id: string;
  passed: number;
  status: IRosTypeDiagnosticMsgsDiagnosticStatus[];
}

export interface IRosTypeGeographicMsgsBoundingBox {
  min_pt: IRosTypeGeographicMsgsGeoPoint;
  max_pt: IRosTypeGeographicMsgsGeoPoint;
}

export interface IRosTypeGeographicMsgsGeoPath {
  header: IRosTypeStdMsgsHeader;
  poses: IRosTypeGeographicMsgsGeoPoseStamped[];
}

export interface IRosTypeGeographicMsgsGeoPoint {
  latitude: number;
  longitude: number;
  altitude: number;
}

export interface IRosTypeGeographicMsgsGeoPointStamped {
  header: IRosTypeStdMsgsHeader;
  position: IRosTypeGeographicMsgsGeoPoint;
}

export interface IRosTypeGeographicMsgsGeoPose {
  position: IRosTypeGeographicMsgsGeoPoint;
  orientation: IRosTypeGeometryMsgsQuaternion;
}

export interface IRosTypeGeographicMsgsGeoPoseStamped {
  header: IRosTypeStdMsgsHeader;
  pose: IRosTypeGeographicMsgsGeoPose;
}

export interface IRosTypeGeographicMsgsGeographicMap {
  header: IRosTypeStdMsgsHeader;
  id: IRosTypeUniqueIdentifierMsgsUuid;
  bounds: IRosTypeGeographicMsgsBoundingBox;
  points: IRosTypeGeographicMsgsWayPoint[];
  features: IRosTypeGeographicMsgsMapFeature[];
  props: IRosTypeGeographicMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsGeographicMapChanges {
  header: IRosTypeStdMsgsHeader;
  diffs: IRosTypeGeographicMsgsGeographicMap;
  deletes: IRosTypeUniqueIdentifierMsgsUuid[];
}

export interface IRosTypeGeographicMsgsGetGeoPath {
  request: IRosTypeGeographicMsgsGetGeoPathRequest;
  response: IRosTypeGeographicMsgsGetGeoPathResponse;
}

export interface IRosTypeGeographicMsgsGetGeoPathRequest {
  start: IRosTypeGeographicMsgsGeoPoint;
  goal: IRosTypeGeographicMsgsGeoPoint;
}

export interface IRosTypeGeographicMsgsGetGeoPathResponse {
  success: boolean;
  status: string;
  plan: IRosTypeGeographicMsgsGeoPath;
  network: IRosTypeUniqueIdentifierMsgsUuid;
  start_seg: IRosTypeUniqueIdentifierMsgsUuid;
  goal_seg: IRosTypeUniqueIdentifierMsgsUuid;
  distance: number;
}

export interface IRosTypeGeographicMsgsGetGeographicMap {
  request: IRosTypeGeographicMsgsGetGeographicMapRequest;
  response: IRosTypeGeographicMsgsGetGeographicMapResponse;
}

export interface IRosTypeGeographicMsgsGetGeographicMapRequest {
  url: string;
  bounds: IRosTypeGeographicMsgsBoundingBox;
}

export interface IRosTypeGeographicMsgsGetGeographicMapResponse {
  success: boolean;
  status: string;
  map: IRosTypeGeographicMsgsGeographicMap;
}

export interface IRosTypeGeographicMsgsGetRoutePlan {
  request: IRosTypeGeographicMsgsGetRoutePlanRequest;
  response: IRosTypeGeographicMsgsGetRoutePlanResponse;
}

export interface IRosTypeGeographicMsgsGetRoutePlanRequest {
  network: IRosTypeUniqueIdentifierMsgsUuid;
  start: IRosTypeUniqueIdentifierMsgsUuid;
  goal: IRosTypeUniqueIdentifierMsgsUuid;
}

export interface IRosTypeGeographicMsgsGetRoutePlanResponse {
  success: boolean;
  status: string;
  plan: IRosTypeGeographicMsgsRoutePath;
}

export interface IRosTypeGeographicMsgsKeyValue {
  key: string;
  value: string;
}

export interface IRosTypeGeographicMsgsMapFeature {
  id: IRosTypeUniqueIdentifierMsgsUuid;
  components: IRosTypeUniqueIdentifierMsgsUuid[];
  props: IRosTypeGeographicMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRouteNetwork {
  header: IRosTypeStdMsgsHeader;
  id: IRosTypeUniqueIdentifierMsgsUuid;
  bounds: IRosTypeGeographicMsgsBoundingBox;
  points: IRosTypeGeographicMsgsWayPoint[];
  segments: IRosTypeGeographicMsgsRouteSegment[];
  props: IRosTypeGeographicMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRoutePath {
  header: IRosTypeStdMsgsHeader;
  network: IRosTypeUniqueIdentifierMsgsUuid;
  segments: IRosTypeUniqueIdentifierMsgsUuid[];
  props: IRosTypeGeographicMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRouteSegment {
  id: IRosTypeUniqueIdentifierMsgsUuid;
  start: IRosTypeUniqueIdentifierMsgsUuid;
  end: IRosTypeUniqueIdentifierMsgsUuid;
  props: IRosTypeGeographicMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsUpdateGeographicMap {
  request: IRosTypeGeographicMsgsUpdateGeographicMapRequest;
  response: IRosTypeGeographicMsgsUpdateGeographicMapResponse;
}

export interface IRosTypeGeographicMsgsUpdateGeographicMapRequest {
  updates: IRosTypeGeographicMsgsGeographicMapChanges;
}

export interface IRosTypeGeographicMsgsUpdateGeographicMapResponse {
  success: boolean;
  status: string;
}

export interface IRosTypeGeographicMsgsWayPoint {
  id: IRosTypeUniqueIdentifierMsgsUuid;
  position: IRosTypeGeographicMsgsGeoPoint;
  props: IRosTypeGeographicMsgsKeyValue[];
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

export interface IRosTypeLgsvlMsgsBoundingBox2D {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IRosTypeLgsvlMsgsBoundingBox3D {
  position: IRosTypeGeometryMsgsPose;
  size: IRosTypeGeometryMsgsVector3;
}

export interface IRosTypeLgsvlMsgsCanBusData {
  header: IRosTypeStdMsgsHeader;
  speed_mps: number;
  throttle_pct: number;
  brake_pct: number;
  steer_pct: number;
  parking_brake_active: boolean;
  high_beams_active: boolean;
  low_beams_active: boolean;
  hazard_lights_active: boolean;
  fog_lights_active: boolean;
  left_turn_signal_active: boolean;
  right_turn_signal_active: boolean;
  wipers_active: boolean;
  reverse_gear_active: boolean;
  selected_gear: IRosTypeLgsvlMsgsCanBusDataSelectedGear;
  engine_active: boolean;
  engine_rpm: number;
  gps_latitude: number;
  gps_longitude: number;
  gps_altitude: number;
  orientation: IRosTypeGeometryMsgsQuaternion;
  linear_velocities: IRosTypeGeometryMsgsVector3;
}

export enum IRosTypeLgsvlMsgsCanBusDataSelectedGear {
  GEAR_NEUTRAL = 0,
  GEAR_DRIVE = 1,
  GEAR_REVERSE = 2,
  GEAR_PARKING = 3,
  GEAR_LOW = 4,
}

export interface IRosTypeLgsvlMsgsDetectedRadarObject {
  id: number;
  sensor_aim: IRosTypeGeometryMsgsVector3;
  sensor_right: IRosTypeGeometryMsgsVector3;
  sensor_position: IRosTypeGeometryMsgsPoint;
  sensor_velocity: IRosTypeGeometryMsgsVector3;
  sensor_angle: number;
  object_position: IRosTypeGeometryMsgsPoint;
  object_velocity: IRosTypeGeometryMsgsVector3;
  object_relative_position: IRosTypeGeometryMsgsPoint;
  object_relative_velocity: IRosTypeGeometryMsgsVector3;
  object_collider_size: IRosTypeGeometryMsgsVector3;
  object_state: IRosTypeLgsvlMsgsDetectedRadarObjectObjectState;
  new_detection: boolean;
}

export enum IRosTypeLgsvlMsgsDetectedRadarObjectObjectState {
  STATE_MOVING = 0,
  STATE_STATIONARY = 1,
}

export interface IRosTypeLgsvlMsgsDetectedRadarObjectArray {
  header: IRosTypeStdMsgsHeader;
  objects: IRosTypeLgsvlMsgsDetectedRadarObject[];
}

export interface IRosTypeLgsvlMsgsDetection2D {
  header: IRosTypeStdMsgsHeader;
  id: number;
  label: string;
  score: number;
  bbox: IRosTypeLgsvlMsgsBoundingBox2D;
  velocity: IRosTypeGeometryMsgsTwist;
}

export interface IRosTypeLgsvlMsgsDetection2DArray {
  header: IRosTypeStdMsgsHeader;
  detections: IRosTypeLgsvlMsgsDetection2D[];
}

export interface IRosTypeLgsvlMsgsDetection3D {
  header: IRosTypeStdMsgsHeader;
  id: number;
  label: string;
  score: number;
  bbox: IRosTypeLgsvlMsgsBoundingBox3D;
  velocity: IRosTypeGeometryMsgsTwist;
}

export interface IRosTypeLgsvlMsgsDetection3DArray {
  header: IRosTypeStdMsgsHeader;
  detections: IRosTypeLgsvlMsgsDetection3D[];
}

export interface IRosTypeLgsvlMsgsSignal {
  header: IRosTypeStdMsgsHeader;
  id: number;
  label: string;
  score: number;
  bbox: IRosTypeLgsvlMsgsBoundingBox3D;
}

export interface IRosTypeLgsvlMsgsSignalArray {
  header: IRosTypeStdMsgsHeader;
  signals: IRosTypeLgsvlMsgsSignal[];
}

export interface IRosTypeLgsvlMsgsUltrasonic {
  header: IRosTypeStdMsgsHeader;
  minimum_distance: number;
}

export interface IRosTypeLgsvlMsgsVehicleControlData {
  header: IRosTypeStdMsgsHeader;
  acceleration_pct: number;
  braking_pct: number;
  target_wheel_angle: number;
  target_wheel_angular_rate: number;
  target_gear: IRosTypeLgsvlMsgsVehicleControlDataTargetGear;
}

export enum IRosTypeLgsvlMsgsVehicleControlDataTargetGear {
  GEAR_NEUTRAL = 0,
  GEAR_DRIVE = 1,
  GEAR_REVERSE = 2,
  GEAR_PARKING = 3,
  GEAR_LOW = 4,
}

export interface IRosTypeLgsvlMsgsVehicleOdometry {
  header: IRosTypeStdMsgsHeader;
  velocity: number;
  front_wheel_angle: number;
  rear_wheel_angle: number;
}

export interface IRosTypeLgsvlMsgsVehicleStateData {
  header: IRosTypeStdMsgsHeader;
  blinker_state: number;
  headlight_state: number;
  wiper_state: number;
  current_gear: number;
  vehicle_mode: IRosTypeLgsvlMsgsVehicleStateDataVehicleMode;
  hand_brake_active: boolean;
  horn_active: boolean;
  autonomous_mode_active: boolean;
}

export enum IRosTypeLgsvlMsgsVehicleStateDataVehicleMode {
  COMPLETE_MANUAL = 0,
  COMPLETE_AUTO_DRIVE = 1,
  AUTO_STEER_ONLY = 2,
  AUTO_SPEED_ONLY = 3,
  EMERGENCY_MODE = 4,
}

export enum IRosTypeLgsvlMsgsVehicleStateDataConst {
  BLINKERS_OFF = 0,
  BLINKERS_LEFT = 1,
  BLINKERS_RIGHT = 2,
  BLINKERS_HAZARD = 3,
  HEADLIGHTS_OFF = 0,
  HEADLIGHTS_LOW = 1,
  HEADLIGHTS_HIGH = 2,
  WIPERS_OFF = 0,
  WIPERS_LOW = 1,
  WIPERS_MED = 2,
  WIPERS_HIGH = 3,
  GEAR_NEUTRAL = 0,
  GEAR_DRIVE = 1,
  GEAR_REVERSE = 2,
  GEAR_PARKING = 3,
  GEAR_LOW = 4,
}

export interface IRosTypeLifecycleMsgsChangeState {
  request: IRosTypeLifecycleMsgsChangeStateRequest;
  response: IRosTypeLifecycleMsgsChangeStateResponse;
}

export interface IRosTypeLifecycleMsgsChangeStateRequest {
  transition: IRosTypeLifecycleMsgsTransition;
}

export interface IRosTypeLifecycleMsgsChangeStateResponse {
  success: boolean;
}

export interface IRosTypeLifecycleMsgsGetAvailableStates {
  response: IRosTypeLifecycleMsgsGetAvailableStatesResponse;
}

export interface IRosTypeLifecycleMsgsGetAvailableStatesResponse {
  available_states: IRosTypeLifecycleMsgsState[];
}

export interface IRosTypeLifecycleMsgsGetAvailableTransitions {
  response: IRosTypeLifecycleMsgsGetAvailableTransitionsResponse;
}

export interface IRosTypeLifecycleMsgsGetAvailableTransitionsResponse {
  available_transitions: IRosTypeLifecycleMsgsTransitionDescription[];
}

export interface IRosTypeLifecycleMsgsGetState {
  response: IRosTypeLifecycleMsgsGetStateResponse;
}

export interface IRosTypeLifecycleMsgsGetStateResponse {
  current_state: IRosTypeLifecycleMsgsState;
}

export interface IRosTypeLifecycleMsgsState {
  id: IRosTypeLifecycleMsgsStateId;
  label: string;
}

export enum IRosTypeLifecycleMsgsStateId {
  PRIMARY_STATE_UNKNOWN = 0,
  PRIMARY_STATE_UNCONFIGURED = 1,
  PRIMARY_STATE_INACTIVE = 2,
  PRIMARY_STATE_ACTIVE = 3,
  PRIMARY_STATE_FINALIZED = 4,
  TRANSITION_STATE_CONFIGURING = 10,
  TRANSITION_STATE_CLEANINGUP = 11,
  TRANSITION_STATE_SHUTTINGDOWN = 12,
  TRANSITION_STATE_ACTIVATING = 13,
  TRANSITION_STATE_DEACTIVATING = 14,
  TRANSITION_STATE_ERRORPROCESSING = 15,
}

export interface IRosTypeLifecycleMsgsTransition {
  id: IRosTypeLifecycleMsgsTransitionId;
  label: string;
}

export enum IRosTypeLifecycleMsgsTransitionId {
  TRANSITION_CREATE = 0,
  TRANSITION_CONFIGURE = 1,
  TRANSITION_CLEANUP = 2,
  TRANSITION_ACTIVATE = 3,
  TRANSITION_DEACTIVATE = 4,
  TRANSITION_UNCONFIGURED_SHUTDOWN = 5,
  TRANSITION_INACTIVE_SHUTDOWN = 6,
  TRANSITION_ACTIVE_SHUTDOWN = 7,
  TRANSITION_DESTROY = 8,
  TRANSITION_ON_CONFIGURE_SUCCESS = 10,
  TRANSITION_ON_CONFIGURE_FAILURE = 11,
  TRANSITION_ON_CONFIGURE_ERROR = 12,
  TRANSITION_ON_CLEANUP_SUCCESS = 20,
  TRANSITION_ON_CLEANUP_FAILURE = 21,
  TRANSITION_ON_CLEANUP_ERROR = 22,
  TRANSITION_ON_ACTIVATE_SUCCESS = 30,
  TRANSITION_ON_ACTIVATE_FAILURE = 31,
  TRANSITION_ON_ACTIVATE_ERROR = 32,
  TRANSITION_ON_DEACTIVATE_SUCCESS = 40,
  TRANSITION_ON_DEACTIVATE_FAILURE = 41,
  TRANSITION_ON_DEACTIVATE_ERROR = 42,
  TRANSITION_ON_SHUTDOWN_SUCCESS = 50,
  TRANSITION_ON_SHUTDOWN_FAILURE = 51,
  TRANSITION_ON_SHUTDOWN_ERROR = 52,
  TRANSITION_ON_ERROR_SUCCESS = 60,
  TRANSITION_ON_ERROR_FAILURE = 61,
  TRANSITION_ON_ERROR_ERROR = 62,
  TRANSITION_CALLBACK_SUCCESS = 97,
  TRANSITION_CALLBACK_FAILURE = 98,
  TRANSITION_CALLBACK_ERROR = 99,
}

export interface IRosTypeLifecycleMsgsTransitionDescription {
  transition: IRosTypeLifecycleMsgsTransition;
  start_state: IRosTypeLifecycleMsgsState;
  goal_state: IRosTypeLifecycleMsgsState;
}

export interface IRosTypeLifecycleMsgsTransitionEvent {
  timestamp: number;
  transition: IRosTypeLifecycleMsgsTransition;
  start_state: IRosTypeLifecycleMsgsState;
  goal_state: IRosTypeLifecycleMsgsState;
}

export interface IRosTypeNavMsgsGetMap {
  response: IRosTypeNavMsgsGetMapResponse;
}

export interface IRosTypeNavMsgsGetMapResponse {
  map: IRosTypeNavMsgsOccupancyGrid;
}

export interface IRosTypeNavMsgsGetPlan {
  request: IRosTypeNavMsgsGetPlanRequest;
  response: IRosTypeNavMsgsGetPlanResponse;
}

export interface IRosTypeNavMsgsGetPlanRequest {
  start: IRosTypeGeometryMsgsPoseStamped;
  goal: IRosTypeGeometryMsgsPoseStamped;
  tolerance: number;
}

export interface IRosTypeNavMsgsGetPlanResponse {
  plan: IRosTypeNavMsgsPath;
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

export interface IRosTypeNavMsgsSetMap {
  request: IRosTypeNavMsgsSetMapRequest;
  response: IRosTypeNavMsgsSetMapResponse;
}

export interface IRosTypeNavMsgsSetMapRequest {
  map: IRosTypeNavMsgsOccupancyGrid;
  initial_pose: IRosTypeGeometryMsgsPoseWithCovarianceStamped;
}

export interface IRosTypeNavMsgsSetMapResponse {
  success: boolean;
}

export interface IRosTypePclMsgsModelCoefficients {
  header: IRosTypeStdMsgsHeader;
  values: number[];
}

export interface IRosTypePclMsgsPointIndices {
  header: IRosTypeStdMsgsHeader;
  indices: number[];
}

export interface IRosTypePclMsgsPolygonMesh {
  header: IRosTypeStdMsgsHeader;
  cloud: IRosTypeSensorMsgsPointCloud2;
  polygons: IRosTypePclMsgsVertices[];
}

export interface IRosTypePclMsgsUpdateFilename {
  request: IRosTypePclMsgsUpdateFilenameRequest;
  response: IRosTypePclMsgsUpdateFilenameResponse;
}

export interface IRosTypePclMsgsUpdateFilenameRequest {
  filename: string;
}

export interface IRosTypePclMsgsUpdateFilenameResponse {
  success: boolean;
}

export interface IRosTypePclMsgsVertices {
  vertices: number[];
}

export interface IRosTypeRosgraphMsgsClock {
  clock: { sec: number, nanosec: number };
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
  power_supply_status: IRosTypeSensorMsgsBatteryStatePowerSupplyStatus;
  power_supply_health: IRosTypeSensorMsgsBatteryStatePowerSupplyHealth;
  power_supply_technology: IRosTypeSensorMsgsBatteryStatePowerSupplyTechnology;
  present: boolean;
  cell_voltage: number[];
  cell_temperature: number[];
  location: string;
  serial_number: string;
}

export enum IRosTypeSensorMsgsBatteryStatePowerSupplyStatus {
  UNKNOWN = 0,
  CHARGING = 1,
  DISCHARGING = 2,
  NOT_CHARGING = 3,
  FULL = 4,
}

export enum IRosTypeSensorMsgsBatteryStatePowerSupplyHealth {
  UNKNOWN = 0,
  GOOD = 1,
  OVERHEAT = 2,
  DEAD = 3,
  OVERVOLTAGE = 4,
  UNSPEC_FAILURE = 5,
  COLD = 6,
  WATCHDOG_TIMER_EXPIRE = 7,
  SAFETY_TIMER_EXPIRE = 8,
}

export enum IRosTypeSensorMsgsBatteryStatePowerSupplyTechnology {
  UNKNOWN = 0,
  NIMH = 1,
  LION = 2,
  LIPO = 3,
  LIFE = 4,
  NICD = 5,
  LIMN = 6,
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
  type: IRosTypeSensorMsgsJoyFeedbackType;
  id: number;
  intensity: number;
}

export enum IRosTypeSensorMsgsJoyFeedbackType {
  LED = 0,
  RUMBLE = 1,
  BUZZER = 2,
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
  position_covariance_type: IRosTypeSensorMsgsNavSatFixPositionCovarianceType;
}

export enum IRosTypeSensorMsgsNavSatFixPositionCovarianceType {
  COVARIANCE_TYPE_UNKNOWN = 0,
  COVARIANCE_TYPE_APPROXIMATED = 1,
  COVARIANCE_TYPE_DIAGONAL_KNOWN = 2,
  COVARIANCE_TYPE_KNOWN = 3,
}

export interface IRosTypeSensorMsgsNavSatStatus {
  status: IRosTypeSensorMsgsNavSatStatusStatus;
  service: IRosTypeSensorMsgsNavSatStatusService;
}

export enum IRosTypeSensorMsgsNavSatStatusStatus {
  STATUS_NO_FIX = -1,
  STATUS_FIX = 0,
  STATUS_SBAS_FIX = 1,
  STATUS_GBAS_FIX = 2,
}

export enum IRosTypeSensorMsgsNavSatStatusService {
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
  datatype: IRosTypeSensorMsgsPointFieldDatatype;
  count: number;
}

export enum IRosTypeSensorMsgsPointFieldDatatype {
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
  radiation_type: IRosTypeSensorMsgsRangeRadiationType;
  field_of_view: number;
  min_range: number;
  max_range: number;
  range: number;
}

export enum IRosTypeSensorMsgsRangeRadiationType {
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

export interface IRosTypeSensorMsgsSetCameraInfo {
  request: IRosTypeSensorMsgsSetCameraInfoRequest;
  response: IRosTypeSensorMsgsSetCameraInfoResponse;
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
  type: IRosTypeShapeMsgsSolidPrimitiveType;
  dimensions: number[];
}

export enum IRosTypeShapeMsgsSolidPrimitiveType {
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

export enum IRosTypeStatisticsMsgsStatisticDataTypeConst {
  STATISTICS_DATA_TYPE_UNINITIALIZED = 0,
  STATISTICS_DATA_TYPE_AVERAGE = 1,
  STATISTICS_DATA_TYPE_MINIMUM = 2,
  STATISTICS_DATA_TYPE_MAXIMUM = 3,
  STATISTICS_DATA_TYPE_STDDEV = 4,
  STATISTICS_DATA_TYPE_SAMPLE_COUNT = 5,
}

export interface IRosTypeStatisticsMsgsMetricsMessage {
  measurement_source_name: string;
  metrics_source: string;
  unit: string;
  window_start: { sec: number, nanosec: number };
  window_stop: { sec: number, nanosec: number };
  statistics: IRosTypeStatisticsMsgsStatisticDataPoint[];
}

export interface IRosTypeStatisticsMsgsStatisticDataPoint {
  data_type: number;
  data: number;
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
  t: number;
  valid_window: IRosTypeSensorMsgsRegionOfInterest;
  min_disparity: number;
  max_disparity: number;
  delta_d: number;
}

export interface IRosTypeTf2MsgsFrameGraph {
  response: IRosTypeTf2MsgsFrameGraphResponse;
}

export interface IRosTypeTf2MsgsFrameGraphResponse {
  frame_yaml: string;
}

export interface IRosTypeTf2MsgsTf2Error {
  error: IRosTypeTf2MsgsTf2ErrorError;
  error_string: string;
}

export enum IRosTypeTf2MsgsTf2ErrorError {
  NO_ERROR = 0,
  LOOKUP_ERROR = 1,
  CONNECTIVITY_ERROR = 2,
  EXTRAPOLATION_ERROR = 3,
  INVALID_ARGUMENT_ERROR = 4,
  TIMEOUT_ERROR = 5,
  TRANSFORM_ERROR = 6,
}

export interface IRosTypeTf2MsgsTfMessage {
  transforms: IRosTypeGeometryMsgsTransformStamped[];
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
  time_from_start: { sec: number, nanosec: number };
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
  time_from_start: { sec: number, nanosec: number };
}

export interface IRosTypeUniqueIdentifierMsgsUuid {
  uuid: number[];
}

export interface IRosTypeVisualizationMsgsGetInteractiveMarkers {
  response: IRosTypeVisualizationMsgsGetInteractiveMarkersResponse;
}

export interface IRosTypeVisualizationMsgsGetInteractiveMarkersResponse {
  sequence_number: number;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
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
  lifetime: { sec: number, nanosec: number };
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
  event_type: IRosTypeVisualizationMsgsInteractiveMarkerFeedbackEventType;
  pose: IRosTypeGeometryMsgsPose;
  menu_entry_id: number;
  mouse_point: IRosTypeGeometryMsgsPoint;
  mouse_point_valid: boolean;
}

export enum IRosTypeVisualizationMsgsInteractiveMarkerFeedbackEventType {
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
  type: IRosTypeVisualizationMsgsInteractiveMarkerUpdateType;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
  poses: IRosTypeVisualizationMsgsInteractiveMarkerPose[];
  erases: string[];
}

export enum IRosTypeVisualizationMsgsInteractiveMarkerUpdateType {
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
  lifetime: { sec: number, nanosec: number };
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
  command_type: IRosTypeVisualizationMsgsMenuEntryCommandType;
}

export enum IRosTypeVisualizationMsgsMenuEntryCommandType {
  FEEDBACK = 0,
  ROSRUN = 1,
  ROSLAUNCH = 2,
}