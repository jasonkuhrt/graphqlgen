// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../types'
import { Post } from '../types'
import { User } from '../types'

export namespace QueryResolvers {
  export const defaultResolvers = {}

  export interface ArgsPost {
    id: string
  }

  export type FeedResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export type DraftsResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export type PostResolver = (
    parent: {},
    args: ArgsPost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export interface Type {
    feed: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>

    drafts: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>

    post: (
      parent: {},
      args: ArgsPost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {}

  export interface ArgsCreateuser {
    name: string | null
  }

  export interface ArgsCreatedraft {
    title: string
    content: string
    authorId: string
  }

  export interface ArgsDeletepost {
    id: string
  }

  export interface ArgsPublish {
    id: string
  }

  export type CreateuserResolver = (
    parent: {},
    args: ArgsCreateuser,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export type CreatedraftResolver = (
    parent: {},
    args: ArgsCreatedraft,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | Promise<Post>

  export type DeletepostResolver = (
    parent: {},
    args: ArgsDeletepost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export type PublishResolver = (
    parent: {},
    args: ArgsPublish,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export interface Type {
    createUser: (
      parent: {},
      args: ArgsCreateuser,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>

    createDraft: (
      parent: {},
      args: ArgsCreatedraft,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | Promise<Post>

    deletePost: (
      parent: {},
      args: ArgsDeletepost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>

    publish: (
      parent: {},
      args: ArgsPublish,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: (parent: Post) => parent.id,
    title: (parent: Post) => parent.title,
    content: (parent: Post) => parent.content,
    published: (parent: Post) => parent.published,
  }

  export type IdResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TitleResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ContentResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PublishedResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type AuthorResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export interface Type {
    id: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    title: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    content: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    published: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>

    author: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
  }

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type PostsResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    posts: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type
  Mutation: MutationResolvers.Type
  Post: PostResolvers.Type
  User: UserResolvers.Type
}