// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: RuleCheck.proto

#ifndef PROTOBUF_INCLUDED_RuleCheck_2eproto
#define PROTOBUF_INCLUDED_RuleCheck_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3007000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3007001 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_RuleCheck_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_RuleCheck_2eproto {
  static const ::google::protobuf::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::ParseTable schema[2]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors_RuleCheck_2eproto();
namespace e2e_message {
class RuleCheckRequest;
class RuleCheckRequestDefaultTypeInternal;
extern RuleCheckRequestDefaultTypeInternal _RuleCheckRequest_default_instance_;
class RuleCheckResponse;
class RuleCheckResponseDefaultTypeInternal;
extern RuleCheckResponseDefaultTypeInternal _RuleCheckResponse_default_instance_;
}  // namespace e2e_message
namespace google {
namespace protobuf {
template<> ::e2e_message::RuleCheckRequest* Arena::CreateMaybeMessage<::e2e_message::RuleCheckRequest>(Arena*);
template<> ::e2e_message::RuleCheckResponse* Arena::CreateMaybeMessage<::e2e_message::RuleCheckResponse>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace e2e_message {

// ===================================================================

class RuleCheckRequest :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:e2e_message.RuleCheckRequest) */ {
 public:
  RuleCheckRequest();
  virtual ~RuleCheckRequest();

  RuleCheckRequest(const RuleCheckRequest& from);

  inline RuleCheckRequest& operator=(const RuleCheckRequest& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  RuleCheckRequest(RuleCheckRequest&& from) noexcept
    : RuleCheckRequest() {
    *this = ::std::move(from);
  }

  inline RuleCheckRequest& operator=(RuleCheckRequest&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor() {
    return default_instance().GetDescriptor();
  }
  static const RuleCheckRequest& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const RuleCheckRequest* internal_default_instance() {
    return reinterpret_cast<const RuleCheckRequest*>(
               &_RuleCheckRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(RuleCheckRequest* other);
  friend void swap(RuleCheckRequest& a, RuleCheckRequest& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline RuleCheckRequest* New() const final {
    return CreateMaybeMessage<RuleCheckRequest>(nullptr);
  }

  RuleCheckRequest* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<RuleCheckRequest>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const RuleCheckRequest& from);
  void MergeFrom(const RuleCheckRequest& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  #if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  static const char* _InternalParse(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
  ::google::protobuf::internal::ParseFunc _ParseFunc() const final { return _InternalParse; }
  #else
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) final;
  #endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const final;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      ::google::protobuf::uint8* target) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(RuleCheckRequest* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // bytes taskhash = 1;
  void clear_taskhash();
  static const int kTaskhashFieldNumber = 1;
  const ::std::string& taskhash() const;
  void set_taskhash(const ::std::string& value);
  #if LANG_CXX11
  void set_taskhash(::std::string&& value);
  #endif
  void set_taskhash(const char* value);
  void set_taskhash(const void* value, size_t size);
  ::std::string* mutable_taskhash();
  ::std::string* release_taskhash();
  void set_allocated_taskhash(::std::string* taskhash);

  // string rule_file = 2;
  void clear_rule_file();
  static const int kRuleFileFieldNumber = 2;
  const ::std::string& rule_file() const;
  void set_rule_file(const ::std::string& value);
  #if LANG_CXX11
  void set_rule_file(::std::string&& value);
  #endif
  void set_rule_file(const char* value);
  void set_rule_file(const char* value, size_t size);
  ::std::string* mutable_rule_file();
  ::std::string* release_rule_file();
  void set_allocated_rule_file(::std::string* rule_file);

  // string input_data = 3;
  void clear_input_data();
  static const int kInputDataFieldNumber = 3;
  const ::std::string& input_data() const;
  void set_input_data(const ::std::string& value);
  #if LANG_CXX11
  void set_input_data(::std::string&& value);
  #endif
  void set_input_data(const char* value);
  void set_input_data(const char* value, size_t size);
  ::std::string* mutable_input_data();
  ::std::string* release_input_data();
  void set_allocated_input_data(::std::string* input_data);

  // @@protoc_insertion_point(class_scope:e2e_message.RuleCheckRequest)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr taskhash_;
  ::google::protobuf::internal::ArenaStringPtr rule_file_;
  ::google::protobuf::internal::ArenaStringPtr input_data_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_RuleCheck_2eproto;
};
// -------------------------------------------------------------------

class RuleCheckResponse :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:e2e_message.RuleCheckResponse) */ {
 public:
  RuleCheckResponse();
  virtual ~RuleCheckResponse();

  RuleCheckResponse(const RuleCheckResponse& from);

  inline RuleCheckResponse& operator=(const RuleCheckResponse& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  RuleCheckResponse(RuleCheckResponse&& from) noexcept
    : RuleCheckResponse() {
    *this = ::std::move(from);
  }

  inline RuleCheckResponse& operator=(RuleCheckResponse&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor() {
    return default_instance().GetDescriptor();
  }
  static const RuleCheckResponse& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const RuleCheckResponse* internal_default_instance() {
    return reinterpret_cast<const RuleCheckResponse*>(
               &_RuleCheckResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  void Swap(RuleCheckResponse* other);
  friend void swap(RuleCheckResponse& a, RuleCheckResponse& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline RuleCheckResponse* New() const final {
    return CreateMaybeMessage<RuleCheckResponse>(nullptr);
  }

  RuleCheckResponse* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<RuleCheckResponse>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const RuleCheckResponse& from);
  void MergeFrom(const RuleCheckResponse& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  #if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  static const char* _InternalParse(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
  ::google::protobuf::internal::ParseFunc _ParseFunc() const final { return _InternalParse; }
  #else
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) final;
  #endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const final;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      ::google::protobuf::uint8* target) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(RuleCheckResponse* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // bytes taskhash = 1;
  void clear_taskhash();
  static const int kTaskhashFieldNumber = 1;
  const ::std::string& taskhash() const;
  void set_taskhash(const ::std::string& value);
  #if LANG_CXX11
  void set_taskhash(::std::string&& value);
  #endif
  void set_taskhash(const char* value);
  void set_taskhash(const void* value, size_t size);
  ::std::string* mutable_taskhash();
  ::std::string* release_taskhash();
  void set_allocated_taskhash(::std::string* taskhash);

  // string error_info = 3;
  void clear_error_info();
  static const int kErrorInfoFieldNumber = 3;
  const ::std::string& error_info() const;
  void set_error_info(const ::std::string& value);
  #if LANG_CXX11
  void set_error_info(::std::string&& value);
  #endif
  void set_error_info(const char* value);
  void set_error_info(const char* value, size_t size);
  ::std::string* mutable_error_info();
  ::std::string* release_error_info();
  void set_allocated_error_info(::std::string* error_info);

  // string output_data = 4;
  void clear_output_data();
  static const int kOutputDataFieldNumber = 4;
  const ::std::string& output_data() const;
  void set_output_data(const ::std::string& value);
  #if LANG_CXX11
  void set_output_data(::std::string&& value);
  #endif
  void set_output_data(const char* value);
  void set_output_data(const char* value, size_t size);
  ::std::string* mutable_output_data();
  ::std::string* release_output_data();
  void set_allocated_output_data(::std::string* output_data);

  // bool status = 2;
  void clear_status();
  static const int kStatusFieldNumber = 2;
  bool status() const;
  void set_status(bool value);

  // @@protoc_insertion_point(class_scope:e2e_message.RuleCheckResponse)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr taskhash_;
  ::google::protobuf::internal::ArenaStringPtr error_info_;
  ::google::protobuf::internal::ArenaStringPtr output_data_;
  bool status_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_RuleCheck_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// RuleCheckRequest

// bytes taskhash = 1;
inline void RuleCheckRequest::clear_taskhash() {
  taskhash_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckRequest::taskhash() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckRequest.taskhash)
  return taskhash_.GetNoArena();
}
inline void RuleCheckRequest::set_taskhash(const ::std::string& value) {
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckRequest.taskhash)
}
#if LANG_CXX11
inline void RuleCheckRequest::set_taskhash(::std::string&& value) {
  
  taskhash_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckRequest.taskhash)
}
#endif
inline void RuleCheckRequest::set_taskhash(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckRequest.taskhash)
}
inline void RuleCheckRequest::set_taskhash(const void* value, size_t size) {
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckRequest.taskhash)
}
inline ::std::string* RuleCheckRequest::mutable_taskhash() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckRequest.taskhash)
  return taskhash_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckRequest::release_taskhash() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckRequest.taskhash)
  
  return taskhash_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckRequest::set_allocated_taskhash(::std::string* taskhash) {
  if (taskhash != nullptr) {
    
  } else {
    
  }
  taskhash_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), taskhash);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckRequest.taskhash)
}

// string rule_file = 2;
inline void RuleCheckRequest::clear_rule_file() {
  rule_file_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckRequest::rule_file() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckRequest.rule_file)
  return rule_file_.GetNoArena();
}
inline void RuleCheckRequest::set_rule_file(const ::std::string& value) {
  
  rule_file_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckRequest.rule_file)
}
#if LANG_CXX11
inline void RuleCheckRequest::set_rule_file(::std::string&& value) {
  
  rule_file_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckRequest.rule_file)
}
#endif
inline void RuleCheckRequest::set_rule_file(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  rule_file_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckRequest.rule_file)
}
inline void RuleCheckRequest::set_rule_file(const char* value, size_t size) {
  
  rule_file_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckRequest.rule_file)
}
inline ::std::string* RuleCheckRequest::mutable_rule_file() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckRequest.rule_file)
  return rule_file_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckRequest::release_rule_file() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckRequest.rule_file)
  
  return rule_file_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckRequest::set_allocated_rule_file(::std::string* rule_file) {
  if (rule_file != nullptr) {
    
  } else {
    
  }
  rule_file_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), rule_file);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckRequest.rule_file)
}

// string input_data = 3;
inline void RuleCheckRequest::clear_input_data() {
  input_data_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckRequest::input_data() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckRequest.input_data)
  return input_data_.GetNoArena();
}
inline void RuleCheckRequest::set_input_data(const ::std::string& value) {
  
  input_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckRequest.input_data)
}
#if LANG_CXX11
inline void RuleCheckRequest::set_input_data(::std::string&& value) {
  
  input_data_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckRequest.input_data)
}
#endif
inline void RuleCheckRequest::set_input_data(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  input_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckRequest.input_data)
}
inline void RuleCheckRequest::set_input_data(const char* value, size_t size) {
  
  input_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckRequest.input_data)
}
inline ::std::string* RuleCheckRequest::mutable_input_data() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckRequest.input_data)
  return input_data_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckRequest::release_input_data() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckRequest.input_data)
  
  return input_data_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckRequest::set_allocated_input_data(::std::string* input_data) {
  if (input_data != nullptr) {
    
  } else {
    
  }
  input_data_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), input_data);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckRequest.input_data)
}

// -------------------------------------------------------------------

// RuleCheckResponse

// bytes taskhash = 1;
inline void RuleCheckResponse::clear_taskhash() {
  taskhash_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckResponse::taskhash() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckResponse.taskhash)
  return taskhash_.GetNoArena();
}
inline void RuleCheckResponse::set_taskhash(const ::std::string& value) {
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckResponse.taskhash)
}
#if LANG_CXX11
inline void RuleCheckResponse::set_taskhash(::std::string&& value) {
  
  taskhash_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckResponse.taskhash)
}
#endif
inline void RuleCheckResponse::set_taskhash(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckResponse.taskhash)
}
inline void RuleCheckResponse::set_taskhash(const void* value, size_t size) {
  
  taskhash_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckResponse.taskhash)
}
inline ::std::string* RuleCheckResponse::mutable_taskhash() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckResponse.taskhash)
  return taskhash_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckResponse::release_taskhash() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckResponse.taskhash)
  
  return taskhash_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckResponse::set_allocated_taskhash(::std::string* taskhash) {
  if (taskhash != nullptr) {
    
  } else {
    
  }
  taskhash_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), taskhash);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckResponse.taskhash)
}

// bool status = 2;
inline void RuleCheckResponse::clear_status() {
  status_ = false;
}
inline bool RuleCheckResponse::status() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckResponse.status)
  return status_;
}
inline void RuleCheckResponse::set_status(bool value) {
  
  status_ = value;
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckResponse.status)
}

// string error_info = 3;
inline void RuleCheckResponse::clear_error_info() {
  error_info_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckResponse::error_info() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckResponse.error_info)
  return error_info_.GetNoArena();
}
inline void RuleCheckResponse::set_error_info(const ::std::string& value) {
  
  error_info_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckResponse.error_info)
}
#if LANG_CXX11
inline void RuleCheckResponse::set_error_info(::std::string&& value) {
  
  error_info_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckResponse.error_info)
}
#endif
inline void RuleCheckResponse::set_error_info(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  error_info_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckResponse.error_info)
}
inline void RuleCheckResponse::set_error_info(const char* value, size_t size) {
  
  error_info_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckResponse.error_info)
}
inline ::std::string* RuleCheckResponse::mutable_error_info() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckResponse.error_info)
  return error_info_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckResponse::release_error_info() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckResponse.error_info)
  
  return error_info_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckResponse::set_allocated_error_info(::std::string* error_info) {
  if (error_info != nullptr) {
    
  } else {
    
  }
  error_info_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), error_info);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckResponse.error_info)
}

// string output_data = 4;
inline void RuleCheckResponse::clear_output_data() {
  output_data_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& RuleCheckResponse::output_data() const {
  // @@protoc_insertion_point(field_get:e2e_message.RuleCheckResponse.output_data)
  return output_data_.GetNoArena();
}
inline void RuleCheckResponse::set_output_data(const ::std::string& value) {
  
  output_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:e2e_message.RuleCheckResponse.output_data)
}
#if LANG_CXX11
inline void RuleCheckResponse::set_output_data(::std::string&& value) {
  
  output_data_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:e2e_message.RuleCheckResponse.output_data)
}
#endif
inline void RuleCheckResponse::set_output_data(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  output_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:e2e_message.RuleCheckResponse.output_data)
}
inline void RuleCheckResponse::set_output_data(const char* value, size_t size) {
  
  output_data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:e2e_message.RuleCheckResponse.output_data)
}
inline ::std::string* RuleCheckResponse::mutable_output_data() {
  
  // @@protoc_insertion_point(field_mutable:e2e_message.RuleCheckResponse.output_data)
  return output_data_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* RuleCheckResponse::release_output_data() {
  // @@protoc_insertion_point(field_release:e2e_message.RuleCheckResponse.output_data)
  
  return output_data_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void RuleCheckResponse::set_allocated_output_data(::std::string* output_data) {
  if (output_data != nullptr) {
    
  } else {
    
  }
  output_data_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), output_data);
  // @@protoc_insertion_point(field_set_allocated:e2e_message.RuleCheckResponse.output_data)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace e2e_message

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_RuleCheck_2eproto
