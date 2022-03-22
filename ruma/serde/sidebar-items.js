initSidebarItems({"derive":[["AsRefStr","Derive the `AsRef<str>` trait for an enum."],["DeserializeFromCowStr","Derive the `Deserialize` trait using the `From<Cow<str>>` implementation of the type."],["DisplayAsRefStr","Derive the `fmt::Display` trait using the `AsRef<str>` implementation of the type."],["FromString","Derive the `From<T: AsRef<str> + Into<Box<str>>>` trait for an enum."],["Incoming","Generating an ‘Incoming’ version of the type this derive macro is used on."],["OrdAsRefStr","Derive the `Ord` trait using the `AsRef<str>` implementation of the type."],["PartialEqAsRefStr","Derive the `PartialEq` trait using the `AsRef<str>` implementation of the type."],["PartialOrdAsRefStr","Derive the `PartialOrd` trait using the `AsRef<str>` implementation of the type."],["SerializeAsRefStr","Derive the `Serialize` trait using the `AsRef<str>` implementation of the type."],["StringEnum","Shorthand for the derives `AsRefStr`, `FromString`, `DisplayAsRefStr`, `SerializeAsRefStr` and `DeserializeFromCowStr`."]],"enum":[["CanonicalJsonError","The set of possible errors when serializing to canonical JSON."],["CanonicalJsonValue","Represents a canonical JSON value as per the Matrix specification."]],"fn":[["btreemap_deserialize_v1_powerlevel_values","Take a BTreeMap with values of either an integer number or a string and deserialize those to integer numbers."],["default_true","Simply returns `true`."],["deserialize_cow_str","Deserialize a `Cow<'de, str>`."],["deserialize_v1_powerlevel","Take either an integer number or a string and deserialize to an integer number."],["empty_string_as_none","Serde deserialization decorator to map empty Strings to None, and forward non-empty Strings to the Deserialize implementation for T. Useful for the typical “A room with an X event with an absent, null, or empty Y field should be treated the same as a room with no such event.” formulation in the spec."],["from_raw_json_value","Helper function for `serde_json::value::RawValue` deserialization."],["is_default","Check whether a value is equal to its default value."],["is_empty","Check whether a value is empty."],["is_true","Simply dereferences the given bool."],["json_to_buf","Creates a buffer and writes a serializable value to it."],["none_as_empty_string","Serde serializiation decorator to map `None` to an empty `String`, and forward `Some`s to the `Serialize` implementation for `T`."],["slice_to_buf","Converts a byte slice to a buffer by copying."],["to_canonical_value","Fallible conversion from any value that impl’s `Serialize` to a `CanonicalJsonValue`."],["try_from_json_map","Fallible conversion from a `serde_json::Map` to a `CanonicalJsonObject`."]],"mod":[["base64","Transparent base64 encoding / decoding as part of (de)serialization."],["can_be_empty","Helpers for emptiness checks in `#[serde(skip_serializing_if)]`."],["duration","De-/serialization functions for `std::time::Duration` objects"],["json_string","De-/serialization functions to and from json strings, allows the type to be used as a query string."],["single_element_seq","De-/serialization functions to and from single element sequences."],["test","Helpers for tests"],["urlencoded","`x-www-form-urlencoded` meets Serde"],["vec_as_map_of_empty","Serde serialization and deserialization functions that map a `Vec<T>` to a `BTreeMap<T, Empty>`."]],"struct":[["Base64","A wrapper around `B` (usually `Vec<u8>`) that (de)serializes from / to a base64 string."],["Base64DecodeError","An error that occurred while decoding a base64 string."],["Raw","A wrapper around `Box<RawValue>`, to be used in place of any type in the Matrix endpoint definition to allow request and response types to contain that said type represented by the generic argument `Ev`."]],"trait":[["CanBeEmpty","Trait for types that have an “empty” state."]],"type":[["CanonicalJsonObject","The inner type of `CanonicalJsonValue::Object`."],["JsonObject","The inner type of [`JsonValue::Object`]."]]});