var uploadStore = new FS.Store.GridFS("uploads");

Uploads = new FS.Collection("uploads", {
    stores: [uploadStore]
});