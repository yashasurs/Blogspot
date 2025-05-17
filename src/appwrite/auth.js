import config from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }
    async getAccount() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting account:', error);
            throw error;
        }
        return null;
    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }
    async deleteAccount() {
        try {
            return await this.account.delete();
        } catch (error) {
            console.error('Error deleting account:', error);
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService;