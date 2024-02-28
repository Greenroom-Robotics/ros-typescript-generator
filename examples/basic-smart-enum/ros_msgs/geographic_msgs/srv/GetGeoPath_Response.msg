

bool success                          # true if the call succeeded
string status                         # more details

geographic_msgs/GeoPath plan          # path to follow

unique_identifier_msgs/UUID network            # the uuid of the RouteNetwork
unique_identifier_msgs/UUID start_seg          # the uuid of the starting RouteSegment
unique_identifier_msgs/UUID goal_seg           # the uuid of the ending RouteSegment
float64 distance                      # the length of the plan
