class LocalStorageService {
  private readonly storage = window.localStorage

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

export const localStorageService = new LocalStorageService();
