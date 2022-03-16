initSidebarItems({"enum":[["AnyEphemeralRoomEvent","Any ephemeral room event."],["AnyEphemeralRoomEventContent","Any ephemeral room event."],["AnyGlobalAccountDataEvent","Any global account data event."],["AnyGlobalAccountDataEventContent","Any global account data event."],["AnyInitialStateEvent","Any state event."],["AnyMessageLikeEvent","Any message-like event."],["AnyMessageLikeEventContent","Any message-like event."],["AnyPossiblyRedactedMessageLikeEvent","An enum that holds either regular un-redacted events or redacted events."],["AnyPossiblyRedactedStateEvent","An enum that holds either regular un-redacted events or redacted events."],["AnyPossiblyRedactedSyncMessageLikeEvent","An enum that holds either regular un-redacted events or redacted events."],["AnyPossiblyRedactedSyncStateEvent","An enum that holds either regular un-redacted events or redacted events."],["AnyRedactedMessageLikeEvent","Any message-like event."],["AnyRedactedRoomEvent","Any redacted room event."],["AnyRedactedStateEvent","Any state event."],["AnyRedactedSyncMessageLikeEvent","Any message-like event."],["AnyRedactedSyncRoomEvent","Any redacted sync room event (room event without a `room_id`, as returned in `/sync` responses)"],["AnyRedactedSyncStateEvent","Any state event."],["AnyRoomAccountDataEvent","Any room account data event."],["AnyRoomAccountDataEventContent","Any room account data event."],["AnyRoomEvent","Any room event."],["AnyStateEvent","Any state event."],["AnyStateEventContent","Any state event."],["AnyStrippedStateEvent","Any state event."],["AnySyncEphemeralRoomEvent","Any ephemeral room event."],["AnySyncMessageLikeEvent","Any message-like event."],["AnySyncRoomEvent","Any sync room event."],["AnySyncStateEvent","Any state event."],["AnyToDeviceEvent","Any to-device event."],["AnyToDeviceEventContent","Any to-device event."],["EphemeralRoomEventType","The type of `EphemeralRoomEventType` this is."],["EventKind","The “kind” of an event."],["EventType","The type of `EventType` this is."],["GlobalAccountDataEventType","The type of `GlobalAccountDataEventType` this is."],["MessageLikeEventType","The type of `MessageLikeEventType` this is."],["RoomAccountDataEventType","The type of `RoomAccountDataEventType` this is."],["RoomEventType","The type of `RoomEventType` this is."],["StateEventType","The type of `StateEventType` this is."],["ToDeviceEventType","The type of `ToDeviceEventType` this is."]],"mod":[["audio","Types for extensible audio message events (MSC3246)."],["call","Modules for events in the `m.call` namespace."],["direct","Types for the `m.direct` event."],["dummy","Types for the `m.dummy` event."],["emote","Types for extensible emote message events (MSC1767)."],["file","Types for extensible file message events (MSC3551)."],["forwarded_room_key","Types for the `m.forwarded_room_key` event."],["fully_read","Types for the `m.fully_read` event."],["ignored_user_list","Types for the `m.ignored_user_list` event."],["image","Types for extensible image message events (MSC3552)."],["key","Modules for events in the `m.key` namespace."],["location","Types for extensible location message events (MSC3488)."],["macros","Re-export of all the derives needed to create your own event types."],["message","Types for extensible text message events (MSC1767)."],["notice","Types for extensible notice message events (MSC1767)."],["pdu","Types for persistent data unit schemas"],["policy","Modules for events in the `m.policy` namespace."],["presence","A presence event is represented by a struct with a set content field."],["push_rules","Types for the `m.push_rules` event."],["reaction","Types for the `m.reaction` event."],["receipt","Types for the `m.receipt` event."],["relation","Types describing event relations after MSC 2674, 2675, 2676, 2677."],["room","Modules for events in the `m.room` namespace."],["room_key","Types for the `m.room_key` event."],["room_key_request","Types for the `m.room_key_request` event."],["secret","Module for events in the `m.secret` namespace."],["space","Types for the `m.space` events."],["sticker","Types for the `m.sticker` event."],["tag","Types for the `m.tag` event."],["typing","Types for the `m.typing` event."],["video","Types for extensible video message events (MSC3553)."]],"struct":[["DecryptedMegolmV1Event","The decrypted payload of an `m.megolm.v1.aes-sha2` event."],["DecryptedOlmV1Event","The decrypted payload of an `m.olm.v1.curve25519-aes-sha2` event."],["EphemeralRoomEvent","An ephemeral room event."],["GlobalAccountDataEvent","A global account data event."],["InitialStateEvent","A minimal state event, used for creating a new room."],["MessageLikeEvent","A message-like event."],["OlmV1Keys","Public keys used for an `m.olm.v1.curve25519-aes-sha2` event."],["RedactedMessageLikeEvent","A redacted message-like event."],["RedactedStateEvent","A redacted state event."],["RedactedSyncMessageLikeEvent","A redacted message-like event without a `room_id`."],["RedactedSyncStateEvent","A redacted state event without a `room_id`."],["RedactedUnsigned","Extra information about a redacted event that is not incorporated into the event’s hash."],["Relations","Precompiled list of relations to this event grouped by relation type."],["RoomAccountDataEvent","A room account data event."],["StateEvent","A state event."],["StrippedStateEvent","A stripped-down state event, used for previews of rooms the user has been invited to."],["SyncEphemeralRoomEvent","An ephemeral room event without a `room_id`."],["SyncMessageLikeEvent","A message-like event without a `room_id`."],["SyncStateEvent","A state event without a `room_id`."],["ToDeviceEvent","An event sent using send-to-device messaging."],["Unsigned","Extra information about an event that is not incorporated into the event’s hash."]],"trait":[["EphemeralRoomEventContent","Marker trait for the content of an ephemeral room event."],["EventContent","The base trait that all event content types implement."],["GlobalAccountDataEventContent","Marker trait for the content of a global account data event."],["MessageLikeEventContent","Marker trait for the content of a message-like event."],["Redact","Trait to define the behavior of redacting an event."],["RedactContent","Trait to define the behavior of redact an event’s content object."],["RedactedEventContent","The base trait that all redacted event content types implement."],["RedactedMessageLikeEventContent","Marker trait for the content of a redacted message-like event."],["RedactedStateEventContent","Marker trait for the content of a redacted state event."],["RoomAccountDataEventContent","Marker trait for the content of a room account data event."],["StateEventContent","Marker trait for the content of a state event."],["StaticEventContent","Trait for abstracting over event content structs."],["ToDeviceEventContent","Marker trait for the content of a to device event."]]});