/// <reference types="@rbxts/types" />

/**
 * Settings for `SerializeInstance`.
 * All fields are optional; defaults are applied internally when omitted.
 */
interface SerializeInstanceSettings {
	IncludeDescendants?: boolean;
	CompressSerializedData?: boolean;
	CompressionLevel?: number;
	EncodeInBase94?: boolean;
	AnnoyingConsolePrints?: boolean;
	UseLegacySlowCompressor?: boolean;
	IncludeAttributes?: boolean;
	DisallowedProperties?: Record<string, Record<string, true>> | undefined;
}

/**
 * Settings for `DeserializeInstance`.
 * All fields are optional; defaults are applied internally when omitted.
 */
interface DeserializeInstanceSettings {
	IsDataCompressed?: boolean;
	IsBase94Encoded?: boolean;
	AnnoyingConsolePrints?: boolean;
	IsCompressedWithLegacyCompressor?: boolean;
	ProperlyDeserializeMeshParts?: boolean;
	ParentInstanceWhileDeserializing?: Instance | undefined;
}

/**
 * Roblox instance serialization/deserialization utilities.
 */
interface MInstance {
	/**
	 * Serializes the provided instance (and optionally its descendants) into a string.
	 */
	SerializeInstance(
		targetInstance: Instance,
		settings?: SerializeInstanceSettings,
	): string;

	/**
	 * Recreates an instance tree from serialized data.
	 */
	DeserializeInstance(
		serializedData: string,
		settings?: DeserializeInstanceSettings,
	): Instance;
}

declare const MInstance: MInstance;
export = MInstance;
