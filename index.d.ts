declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PG_URL: string,
        PG_PORT: string,
        PG_USERNAME: string
        PG_PASSWORD: string
        PG_DATABASE_NAME: string
    }
  }
}

interface User {
  id: number,
  name: string
  email: string,
  image_id: number,
  image?: Image | null,
  password: null
  role: Role,
  createdAt: string
  updatedAt: string
}

interface Image {
  id: number,
  url: string,
  createdAt: string,
  updatedAt: string,
}

type Role = "admin" | "user";