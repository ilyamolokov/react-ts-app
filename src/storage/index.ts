class StorageService {
  private readonly storage: Storage | null = null

  constructor(storage: Storage) {
    this.storage = storage
  }

  get<T>(key: string): T | null {
    if(!this.storage) return null
    const value = this.storage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  set(key: string, value: unknown) {
    if(!this.storage) return null

    this.storage.setItem(key, JSON.stringify(value));
  }

  delete(key: string) {
    if(!this.storage) return null
    this.storage.removeItem(key);
  }

  clear() {
    if(!this.storage) return null
    this.storage.clear();
  }
}

export const localStorageService = new StorageService(window.localStorage);
export const sessionStorageService = new StorageService(window.sessionStorage);
