import conf from '../conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    createPost({ title,slug, content, featuredImage, status,userId }) {
        try {
            return this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );

        } catch (error) {
            console.error('Error creating post:', error);
            
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
    async deletePost(slug) {
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error('Error deleting post:', error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.error('Error getting post:', error);
            return null;
        }
    }
    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('status', 'active')
                ],
                100,
                0,
            );
        } catch (error) {
            console.error('Error getting posts:', error);
            return null;
        }
    }
    async uploadFile(file) {
        try {
            const fileId = ID.unique();
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileId,
                file
            );

        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    }
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('Error deleting image:', error);
            return null;
        }
    }
    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('Error getting image preview:', error);
            return null;
        }
    }
}

const service = new Service();
export default service;