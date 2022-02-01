/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// These files were generated using "ros-typescript-generator"
export interface IRosTypeActionMsgsCancelGoalRequest {
  goal_info: IRosTypeActionMsgsGoalInfo;
}

export interface IRosTypeActionMsgsCancelGoalResponse {
  ERROR_NONE: number;
  ERROR_REJECTED: number;
  ERROR_UNKNOWN_GOAL_ID: number;
  ERROR_GOAL_TERMINATED: number;
  return_code: number;
  goals_canceling: IRosTypeActionMsgsGoalInfo[];
}

export interface IRosTypeActionMsgsGoalInfo {
  goal_id: IRosTypeUniqueIdentifierMsgsUuid;
  stamp: {sec: number, nanosec: number};
}

export interface IRosTypeActionMsgsGoalStatus {
  STATUS_UNKNOWN: number;
  STATUS_ACCEPTED: number;
  STATUS_EXECUTING: number;
  STATUS_CANCELING: number;
  STATUS_SUCCEEDED: number;
  STATUS_CANCELED: number;
  STATUS_ABORTED: number;
  goal_info: IRosTypeActionMsgsGoalInfo;
  status: number;
}

export interface IRosTypeActionMsgsGoalStatusArray {
  status_list: IRosTypeActionlibMsgsGoalStatus[];
}

export interface IRosTypeActionlibMsgsGoalId {
  stamp: {sec: number, nanosec: number};
  id: string;
}

export interface IRosTypeActionlibMsgsGoalStatus {
  goal_id: IRosTypeActionlibMsgsGoalId;
  status: number;
  PENDING: number;
  ACTIVE: number;
  PREEMPTED: number;
  SUCCEEDED: number;
  ABORTED: number;
  REJECTED: number;
  PREEMPTING: number;
  RECALLING: number;
  RECALLED: number;
  LOST: number;
  text: string;
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
  NONE: number;
  PARK: number;
  REVERSE: number;
  NEUTRAL: number;
  DRIVE: number;
  LOW: number;
  gear: number;
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
  NONE: number;
  LEFT: number;
  RIGHT: number;
  turn_signal: number;
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
  OK: number;
  WARN: number;
  ERROR: number;
  STALE: number;
  level: number;
  name: string;
  message: string;
  hardware_id: string;
  values: IRosTypeDiagnosticMsgsKeyValue[];
}

export interface IRosTypeDiagnosticMsgsKeyValue {
  key: string;
  value: string;
}

export interface IRosTypeDiagnosticMsgsSelfTestRequest {

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
  props: IRosTypeDiagnosticMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsGeographicMapChanges {
  header: IRosTypeStdMsgsHeader;
  diffs: IRosTypeGeographicMsgsGeographicMap;
  deletes: IRosTypeUniqueIdentifierMsgsUuid[];
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

export interface IRosTypeGeographicMsgsGetGeographicMapRequest {
  url: string;
  bounds: IRosTypeGeographicMsgsBoundingBox;
}

export interface IRosTypeGeographicMsgsGetGeographicMapResponse {
  success: boolean;
  status: string;
  map: IRosTypeGeographicMsgsGeographicMap;
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
  props: IRosTypeDiagnosticMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRouteNetwork {
  header: IRosTypeStdMsgsHeader;
  id: IRosTypeUniqueIdentifierMsgsUuid;
  bounds: IRosTypeGeographicMsgsBoundingBox;
  points: IRosTypeGeographicMsgsWayPoint[];
  segments: IRosTypeGeographicMsgsRouteSegment[];
  props: IRosTypeDiagnosticMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRoutePath {
  header: IRosTypeStdMsgsHeader;
  network: IRosTypeUniqueIdentifierMsgsUuid;
  segments: IRosTypeUniqueIdentifierMsgsUuid[];
  props: IRosTypeDiagnosticMsgsKeyValue[];
}

export interface IRosTypeGeographicMsgsRouteSegment {
  id: IRosTypeUniqueIdentifierMsgsUuid;
  start: IRosTypeUniqueIdentifierMsgsUuid;
  end: IRosTypeUniqueIdentifierMsgsUuid;
  props: IRosTypeDiagnosticMsgsKeyValue[];
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
  props: IRosTypeDiagnosticMsgsKeyValue[];
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
  selected_gear: number;
  engine_active: boolean;
  engine_rpm: number;
  gps_latitude: number;
  gps_longitude: number;
  gps_altitude: number;
  orientation: IRosTypeGeometryMsgsQuaternion;
  linear_velocities: IRosTypeGeometryMsgsVector3;
  GEAR_NEUTRAL: number;
  GEAR_DRIVE: number;
  GEAR_REVERSE: number;
  GEAR_PARKING: number;
  GEAR_LOW: number;
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
  object_state: number;
  new_detection: boolean;
  STATE_MOVING: number;
  STATE_STATIONARY: number;
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
  target_gear: number;
  GEAR_NEUTRAL: number;
  GEAR_DRIVE: number;
  GEAR_REVERSE: number;
  GEAR_PARKING: number;
  GEAR_LOW: number;
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
  vehicle_mode: number;
  hand_brake_active: boolean;
  horn_active: boolean;
  autonomous_mode_active: boolean;
  BLINKERS_OFF: number;
  BLINKERS_LEFT: number;
  BLINKERS_RIGHT: number;
  BLINKERS_HAZARD: number;
  HEADLIGHTS_OFF: number;
  HEADLIGHTS_LOW: number;
  HEADLIGHTS_HIGH: number;
  WIPERS_OFF: number;
  WIPERS_LOW: number;
  WIPERS_MED: number;
  WIPERS_HIGH: number;
  GEAR_NEUTRAL: number;
  GEAR_DRIVE: number;
  GEAR_REVERSE: number;
  GEAR_PARKING: number;
  GEAR_LOW: number;
  VEHICLE_MODE_COMPLETE_MANUAL: number;
  VEHICLE_MODE_COMPLETE_AUTO_DRIVE: number;
  VEHICLE_MODE_AUTO_STEER_ONLY: number;
  VEHICLE_MODE_AUTO_SPEED_ONLY: number;
  VEHICLE_MODE_EMERGENCY_MODE: number;
}

export interface IRosTypeLifecycleMsgsChangeStateRequest {
  transition: IRosTypeLifecycleMsgsTransition;
}

export interface IRosTypeLifecycleMsgsChangeStateResponse {
  success: boolean;
}

export interface IRosTypeLifecycleMsgsGetAvailableStatesRequest {

}

export interface IRosTypeLifecycleMsgsGetAvailableStatesResponse {
  available_states: IRosTypeLifecycleMsgsState[];
}

export interface IRosTypeLifecycleMsgsGetAvailableTransitionsRequest {

}

export interface IRosTypeLifecycleMsgsGetAvailableTransitionsResponse {
  available_transitions: IRosTypeLifecycleMsgsTransitionDescription[];
}

export interface IRosTypeLifecycleMsgsGetStateRequest {

}

export interface IRosTypeLifecycleMsgsGetStateResponse {
  current_state: IRosTypeLifecycleMsgsState;
}

export interface IRosTypeLifecycleMsgsState {
  PRIMARY_STATE_UNKNOWN: number;
  PRIMARY_STATE_UNCONFIGURED: number;
  PRIMARY_STATE_INACTIVE: number;
  PRIMARY_STATE_ACTIVE: number;
  PRIMARY_STATE_FINALIZED: number;
  TRANSITION_STATE_CONFIGURING: number;
  TRANSITION_STATE_CLEANINGUP: number;
  TRANSITION_STATE_SHUTTINGDOWN: number;
  TRANSITION_STATE_ACTIVATING: number;
  TRANSITION_STATE_DEACTIVATING: number;
  TRANSITION_STATE_ERRORPROCESSING: number;
  id: number;
  label: string;
}

export interface IRosTypeLifecycleMsgsTransition {
  TRANSITION_CREATE: number;
  TRANSITION_CONFIGURE: number;
  TRANSITION_CLEANUP: number;
  TRANSITION_ACTIVATE: number;
  TRANSITION_DEACTIVATE: number;
  TRANSITION_UNCONFIGURED_SHUTDOWN: number;
  TRANSITION_INACTIVE_SHUTDOWN: number;
  TRANSITION_ACTIVE_SHUTDOWN: number;
  TRANSITION_DESTROY: number;
  TRANSITION_ON_CONFIGURE_SUCCESS: number;
  TRANSITION_ON_CONFIGURE_FAILURE: number;
  TRANSITION_ON_CONFIGURE_ERROR: number;
  TRANSITION_ON_CLEANUP_SUCCESS: number;
  TRANSITION_ON_CLEANUP_FAILURE: number;
  TRANSITION_ON_CLEANUP_ERROR: number;
  TRANSITION_ON_ACTIVATE_SUCCESS: number;
  TRANSITION_ON_ACTIVATE_FAILURE: number;
  TRANSITION_ON_ACTIVATE_ERROR: number;
  TRANSITION_ON_DEACTIVATE_SUCCESS: number;
  TRANSITION_ON_DEACTIVATE_FAILURE: number;
  TRANSITION_ON_DEACTIVATE_ERROR: number;
  TRANSITION_ON_SHUTDOWN_SUCCESS: number;
  TRANSITION_ON_SHUTDOWN_FAILURE: number;
  TRANSITION_ON_SHUTDOWN_ERROR: number;
  TRANSITION_ON_ERROR_SUCCESS: number;
  TRANSITION_ON_ERROR_FAILURE: number;
  TRANSITION_ON_ERROR_ERROR: number;
  TRANSITION_CALLBACK_SUCCESS: number;
  TRANSITION_CALLBACK_FAILURE: number;
  TRANSITION_CALLBACK_ERROR: number;
  id: number;
  label: string;
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

export interface IRosTypeNavMsgsGetMapRequest {

}

export interface IRosTypeNavMsgsGetMapResponse {
  map: IRosTypeNavMsgsOccupancyGrid;
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
  map_load_time: {sec: number, nanosec: number};
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
  clock: {sec: number, nanosec: number};
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
  time_ref: {sec: number, nanosec: number};
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
  BOX: number;
  SPHERE: number;
  CYLINDER: number;
  CONE: number;
  type: number;
  dimensions: number[];
  BOX_X: number;
  BOX_Y: number;
  BOX_Z: number;
  SPHERE_RADIUS: number;
  CYLINDER_HEIGHT: number;
  CYLINDER_RADIUS: number;
  CONE_HEIGHT: number;
  CONE_RADIUS: number;
}

export interface IRosTypeStatisticsMsgsMetricsMessage {
  measurement_source_name: string;
  metrics_source: string;
  unit: string;
  window_start: {sec: number, nanosec: number};
  window_stop: {sec: number, nanosec: number};
  statistics: IRosTypeStatisticsMsgsStatisticDataPoint[];
}

export interface IRosTypeStatisticsMsgsStatisticDataPoint {
  data_type: number;
  data: number;
}

export interface IRosTypeStatisticsMsgsStatisticDataType {
  STATISTICS_DATA_TYPE_UNINITIALIZED: number;
  STATISTICS_DATA_TYPE_AVERAGE: number;
  STATISTICS_DATA_TYPE_MINIMUM: number;
  STATISTICS_DATA_TYPE_MAXIMUM: number;
  STATISTICS_DATA_TYPE_STDDEV: number;
  STATISTICS_DATA_TYPE_SAMPLE_COUNT: number;
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
  stamp: {sec: number, nanosec: number};
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

export interface IRosTypeTf2MsgsFrameGraphRequest {

}

export interface IRosTypeTf2MsgsFrameGraphResponse {
  frame_yaml: string;
}

export interface IRosTypeTf2MsgsTf2Error {
  NO_ERROR: number;
  LOOKUP_ERROR: number;
  CONNECTIVITY_ERROR: number;
  EXTRAPOLATION_ERROR: number;
  INVALID_ARGUMENT_ERROR: number;
  TIMEOUT_ERROR: number;
  TRANSFORM_ERROR: number;
  error: number;
  error_string: string;
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

export interface IRosTypeUniqueIdentifierMsgsUuid {
  uuid: number[];
}

export interface IRosTypeVisualizationMsgsGetInteractiveMarkersRequest {

}

export interface IRosTypeVisualizationMsgsGetInteractiveMarkersResponse {
  sequence_number: number;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
}

export interface IRosTypeVisualizationMsgsImageMarker {
  CIRCLE: number;
  LINE_STRIP: number;
  LINE_LIST: number;
  POLYGON: number;
  POINTS: number;
  ADD: number;
  REMOVE: number;
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
  INHERIT: number;
  FIXED: number;
  VIEW_FACING: number;
  orientation_mode: number;
  NONE: number;
  MENU: number;
  BUTTON: number;
  MOVE_AXIS: number;
  MOVE_PLANE: number;
  ROTATE_AXIS: number;
  MOVE_ROTATE: number;
  MOVE_3D: number;
  ROTATE_3D: number;
  MOVE_ROTATE_3D: number;
  interaction_mode: number;
  always_visible: boolean;
  markers: IRosTypeVisualizationMsgsMarker[];
  independent_marker_orientation: boolean;
  description: string;
}

export interface IRosTypeVisualizationMsgsInteractiveMarkerFeedback {
  header: IRosTypeStdMsgsHeader;
  client_id: string;
  marker_name: string;
  control_name: string;
  KEEP_ALIVE: number;
  POSE_UPDATE: number;
  MENU_SELECT: number;
  BUTTON_CLICK: number;
  MOUSE_DOWN: number;
  MOUSE_UP: number;
  event_type: number;
  pose: IRosTypeGeometryMsgsPose;
  menu_entry_id: number;
  mouse_point: IRosTypeGeometryMsgsPoint;
  mouse_point_valid: boolean;
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
  KEEP_ALIVE: number;
  UPDATE: number;
  type: number;
  markers: IRosTypeVisualizationMsgsInteractiveMarker[];
  poses: IRosTypeVisualizationMsgsInteractiveMarkerPose[];
  erases: string[];
}

export interface IRosTypeVisualizationMsgsMarker {
  ARROW: number;
  CUBE: number;
  SPHERE: number;
  CYLINDER: number;
  LINE_STRIP: number;
  LINE_LIST: number;
  CUBE_LIST: number;
  SPHERE_LIST: number;
  POINTS: number;
  TEXT_VIEW_FACING: number;
  MESH_RESOURCE: number;
  TRIANGLE_LIST: number;
  ADD: number;
  MODIFY: number;
  DELETE: number;
  DELETEALL: number;
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

export interface IRosTypeVisualizationMsgsMarkerArray {
  markers: IRosTypeVisualizationMsgsMarker[];
}

export interface IRosTypeVisualizationMsgsMenuEntry {
  id: number;
  parent_id: number;
  title: string;
  command: string;
  FEEDBACK: number;
  ROSRUN: number;
  ROSLAUNCH: number;
  command_type: number;
}