class SessionStorageService {
  private readonly storage = window.sessionStorage

  get<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  set(key: string, value: unknown) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  delete(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const sessionStorageService = new SessionStorageService();
