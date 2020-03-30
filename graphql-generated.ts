import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};



export type Book = Node & {
   __typename?: 'Book';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};


export type GetBooksQueryVariables = {};


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'author'>
  )>>> }
);

export const GetBooksDocument = gql`
    query GetBooks {
  books {
    id
    title
    author
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBooksGQL extends Apollo.Query<GetBooksQuery, GetBooksQueryVariables> {
    document = GetBooksDocument;
    
  }

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "Book"
          }
        ]
      }
    ]
  }
};
      export default result;
    