import { type InferInsertModel, type InferSelectModel } from "drizzle-orm"
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

const _emptyExtraConfig = () => []
const _uuid = () => crypto.randomUUID()
const _now = () => new Date()

export const user = sqliteTable("user", {
  id: text("id").notNull().primaryKey().$default(_uuid),
  name: text("name").notNull(),
  emailVerified: integer({ mode: "timestamp" }),
  email: text("email").notNull().unique(),
  password: text("password"),
  image: text("image"),
  createdAt: integer({ mode: "timestamp" }).notNull().$default(_now),
}, _emptyExtraConfig)

export type UserSelect = InferSelectModel<typeof user>
export type UserInsert = InferInsertModel<typeof user>