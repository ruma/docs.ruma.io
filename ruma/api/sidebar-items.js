initSidebarItems({"enum":[["AuthScheme","Authentication scheme used by the endpoint."],["MatrixVersion","The Matrix versions Ruma currently understands to exist."],["SendAccessToken","An enum to control whether an access token should be added to outgoing requests"]],"macro":[["ruma_api",""]],"mod":[["appservice","(De)serializable types for the Matrix Application Service API. These types can be shared by application service and server code."],["client","(De)serializable types for the Matrix Client-Server API. These types can be shared by client and server code."],["error","This module contains types for all kinds of errors that can occur when converting between http requests / responses and ruma’s representation of matrix API requests / responses."],["federation","(De)serializable types for the Matrix Server-Server API. These types are used by server code."],["identity_service","(De)serializable types for the Matrix Identity Service API. These types can be shared by client and identity service code."],["push_gateway","(De)serializable types for the Matrix Push Gateway API. These types can be shared by push gateway and server code."]],"struct":[["Metadata","Metadata about an API endpoint."],["UnknownVersionError","An error that happens when Ruma cannot understand a Matrix version."]],"trait":[["EndpointError","Gives users the ability to define their own serializable / deserializable errors."],["IncomingNonAuthRequest","Marker trait for requests that don’t require authentication, for the server side."],["IncomingRequest","A request type for a Matrix API endpoint, used for receiving requests."],["IncomingResponse","A response type for a Matrix API endpoint, used for receiving responses."],["OutgoingNonAuthRequest","Marker trait for requests that don’t require authentication, for the client side."],["OutgoingRequest","A request type for a Matrix API endpoint, used for sending requests."],["OutgoingRequestAppserviceExt","An extension to `OutgoingRequest` which provides Appservice specific methods."],["OutgoingResponse","A request type for a Matrix API endpoint, used for sending responses."]]});