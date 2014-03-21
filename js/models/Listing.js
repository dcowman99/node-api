var mongoose = require('mongoose');

//=========== schema ================
var ListingSchema = mongoose.Schema({
ListingID:		String,
MLSListingID:	Number,
TerritoryID:	Number,
ListingPrice:	Number,
FormattedListingPrice:String,
Address:		String,
City:			String,
County:			String,
Region:			String,
ZipCode:		Number,
Latitude:		Number,
Longitude:		Number,
TotalRows:		Number,
MinLatitude:	Number,
MinLongitude:	Number,
MaxLatitude:	Number,
MaxLongitude:	Number,
SqFt:			Number,
Acres:			Number,
Beds:			Number,
Baths:			Number,
YearBuilt:		Number,
PropertyType:	Number,
FeatureEN:		String,
FeatureSP:		String,
Location:		String,
Units:			Number,
PhotoSourcePath:String,
PhotoAtHBM:		Boolean,
LargePhotoAtHBM:Boolean,
MultiplePhotoCount:Number,
VirtualTourURL:	String,
ListDate:		Date,
DatePhotoAdded:	Date,
DatePriceChange:Date,
Directions:		String,
INetRemarks: 	String,
ApptPhone:		String,
ListAgentInfo:	String,
ListBrokerID:	String,
StatusString:	String,
INetAddress:	String,
Notebook:		String,
UserRating:		Number,
Discard:		Boolean,
ListingSchemaStatusID:Number,
ListingSchemaType:String,
ListingSchemaTypeID:Number,
MLSLogo:		String,
DaysListed:		Number,
ShortListDate:	Date,
ColumnGroups:	String,
NotesAndTrackingInfo:String,
NotebookAddedOn:String,
FormattedNotebookAddedOn:String,
RowGuid:		String
});

//========== model =================
module.exports = mongoose.model('Listing', ListingSchema);




