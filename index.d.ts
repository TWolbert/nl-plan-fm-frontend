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

export interface User {
  id: number,
  name: string | null,
  email: string | null,
  image_id: number | null,
  image?: Image | null,
  password: string | null
  role: Role | null,
  createdAt: Date | null,
  updatedAt: Date | null,
}

interface Image {
  id: number,
  url: string,
  createdAt: string,
  updatedAt: string,
}

type Role = "admin" | "user";