import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  JSONObject: any,
};

export type AllLogs = {
   __typename?: 'AllLogs',
  data?: Maybe<Array<LogData>>,
};

export type CargoData = {
   __typename?: 'CargoData',
  mineral: Minerals,
  percentage: Scalars['Float'],
};

export type ChangePasswordInput = {
  password: Scalars['String'],
  token: Scalars['String'],
};

export type EmailInput = {
  email: Scalars['String'],
};


export type LogData = {
   __typename?: 'LogData',
  id: Scalars['Float'],
  date: Scalars['String'],
  patch: Scalars['String'],
  ship: MiningShips,
  miningHead1: MiningHeadData,
  miningHead2: MiningHeadData,
  miningHead3: MiningHeadData,
  miningLocation: MiningLocations,
  sellLocation: SellLocations,
  sellPrice: Scalars['Float'],
  operatingCost: Scalars['Float'],
  profit: Scalars['Float'],
  emptySpace: Scalars['Float'],
  cargoBreakdown: Array<CargoData>,
};

export type LogDataArgsType = {
  date: Scalars['String'],
  patch: Scalars['String'],
  ship: MiningShips,
  miningHead1: MiningHeadData,
  miningHead2: MiningHeadData,
  miningHead3: MiningHeadData,
  miningLocation: MiningLocations,
  sellLocation: SellLocations,
  sellPrice: Scalars['Float'],
  operatingCost: Scalars['Float'],
  profit: Scalars['Float'],
  emptySpace: Scalars['Float'],
  cargoBreakdown: Array<Scalars['JSONObject']>,
};

export type LoginInput = {
  password: Scalars['String'],
  email: Scalars['String'],
};

export enum Minerals {
  Quantainium = 'Quantainium',
  Bexalite = 'Bexalite',
  Taranite = 'Taranite',
  Borase = 'Borase',
  Laranite = 'Laranite',
  Agricium = 'Agricium',
  Hephaestanite = 'Hephaestanite',
  Titanium = 'Titanium',
  Diamond = 'Diamond',
  Gold = 'Gold',
  Copper = 'Copper',
  Beryl = 'Beryl',
  Tungsten = 'Tungsten',
  Corundum = 'Corundum',
  Quartz = 'Quartz',
  Aluminium = 'Aluminium',
  InertMaterial = 'InertMaterial'
}

export enum MiningHeadData {
  ArborMh1 = 'ArborMH1',
  ArborMh2 = 'ArborMH2',
  HelixS1 = 'HelixS1',
  HelixS2 = 'HelixS2',
  HofstedeS1 = 'HofstedeS1',
  HofstedeS2 = 'HofstedeS2',
  Impact1 = 'Impact1',
  Impact2 = 'Impact2',
  KleinS1 = 'KleinS1',
  KleinS2 = 'KleinS2',
  LancetMh1 = 'LancetMH1',
  LancetMh2 = 'LancetMH2',
  None = 'None'
}

export enum MiningLocations {
  AaronHalo = 'AaronHalo',
  Lyria = 'Lyria',
  Wala = 'Wala',
  Cellin = 'Cellin',
  Daymar = 'Daymar',
  Yela = 'Yela',
  Crul = 'CRUL',
  Levski = 'Levski',
  Aberdeen = 'Aberdeen',
  Arial = 'Arial',
  Ita = 'Ita',
  Magda = 'Magda',
  Hurl = 'HURL',
  Calliope = 'Calliope',
  Clio = 'Clio',
  Euterpe = 'Euterpe',
  Micl1 = 'MICL1'
}

export enum MiningShips {
  Prospector = 'Prospector',
  Mole = 'Mole'
}

export type Mutation = {
   __typename?: 'Mutation',
  register: User,
  changePassword?: Maybe<User>,
  confirm: Scalars['Boolean'],
  forgotPassword: Scalars['Boolean'],
  login?: Maybe<User>,
  logout: Scalars['Boolean'],
  createUser: User,
  addLog?: Maybe<LogData>,
  updateLog?: Maybe<LogData>,
  deleteLog: Scalars['Boolean'],
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput
};


export type MutationConfirmArgs = {
  token: Scalars['String']
};


export type MutationForgotPasswordArgs = {
  input: EmailInput
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationCreateUserArgs = {
  input: RegisterInput
};


export type MutationAddLogArgs = {
  logData: LogDataArgsType
};


export type MutationUpdateLogArgs = {
  logData: LogDataArgsType,
  logId: Scalars['Float']
};


export type MutationDeleteLogArgs = {
  logId: Scalars['Float']
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  users: Array<User>,
  me?: Maybe<User>,
  getAllLogs?: Maybe<AllLogs>,
  getLog?: Maybe<LogData>,
};


export type QueryGetLogArgs = {
  logId: Scalars['Float']
};

export type RegisterInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export enum SellLocations {
  Area18 = 'Area18',
  PortOlisar = 'PortOlisar',
  GrimHex = 'GrimHex',
  Levski = 'Levski',
  NewBabbage = 'NewBabbage'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String'],
  confirmed: Scalars['Boolean'],
  logs?: Maybe<AllLogs>,
};

export type AddLogMutationVariables = {
  date: Scalars['String'],
  patch: Scalars['String'],
  ship: MiningShips,
  miningHead1: MiningHeadData,
  miningHead2: MiningHeadData,
  miningHead3: MiningHeadData,
  miningLocation: MiningLocations,
  sellLocation: SellLocations,
  sellPrice: Scalars['Float'],
  operatingCost: Scalars['Float'],
  profit: Scalars['Float'],
  emptySpace: Scalars['Float'],
  cargoBreakdown: Array<Scalars['JSONObject']>
};


export type AddLogMutation = (
  { __typename?: 'Mutation' }
  & { addLog: Maybe<(
    { __typename?: 'LogData' }
    & Pick<LogData, 'id'>
  )> }
);

export type DeleteLogMutationVariables = {
  logId: Scalars['Float']
};


export type DeleteLogMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteLog'>
);

export type GetAllLogsQueryVariables = {};


export type GetAllLogsQuery = (
  { __typename?: 'Query' }
  & { getAllLogs: Maybe<(
    { __typename?: 'AllLogs' }
    & { data: Maybe<Array<(
      { __typename?: 'LogData' }
      & Pick<LogData, 'id' | 'date' | 'ship' | 'profit' | 'miningLocation' | 'sellLocation'>
    )>> }
  )> }
);

export type GetLogQueryVariables = {
  logId: Scalars['Float']
};


export type GetLogQuery = (
  { __typename?: 'Query' }
  & { getLog: Maybe<(
    { __typename?: 'LogData' }
    & Pick<LogData, 'id' | 'date' | 'patch' | 'ship' | 'miningHead1' | 'miningHead2' | 'miningHead3' | 'miningLocation' | 'sellLocation' | 'sellPrice' | 'operatingCost' | 'profit' | 'emptySpace'>
    & { cargoBreakdown: Array<(
      { __typename?: 'CargoData' }
      & Pick<CargoData, 'mineral' | 'percentage'>
    )> }
  )> }
);

export type UpdateLogMutationVariables = {
  logId: Scalars['Float'],
  date: Scalars['String'],
  patch: Scalars['String'],
  ship: MiningShips,
  miningHead1: MiningHeadData,
  miningHead2: MiningHeadData,
  miningHead3: MiningHeadData,
  miningLocation: MiningLocations,
  sellLocation: SellLocations,
  sellPrice: Scalars['Float'],
  operatingCost: Scalars['Float'],
  profit: Scalars['Float'],
  emptySpace: Scalars['Float'],
  cargoBreakdown: Array<Scalars['JSONObject']>
};


export type UpdateLogMutation = (
  { __typename?: 'Mutation' }
  & { updateLog: Maybe<(
    { __typename?: 'LogData' }
    & Pick<LogData, 'id' | 'date' | 'patch' | 'ship' | 'miningHead1' | 'miningHead2' | 'miningHead3' | 'miningLocation' | 'sellLocation' | 'sellPrice' | 'operatingCost' | 'profit' | 'emptySpace'>
    & { cargoBreakdown: Array<(
      { __typename?: 'CargoData' }
      & Pick<CargoData, 'mineral' | 'percentage'>
    )> }
  )> }
);

export type ChangePasswordMutationVariables = {
  token: Scalars['String'],
  password: Scalars['String']
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'fullName'>
  )> }
);

export type ConfirmMutationVariables = {
  token: Scalars['String']
};


export type ConfirmMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirm'>
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type ProtectedHelloQueryVariables = {};


export type ProtectedHelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type RegisterMutationVariables = {
  input: RegisterInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'fullName' | 'email' | 'password' | 'confirmed'>
  ) }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'fullName' | 'email'>
  )> }
);


export const AddLogDocument = gql`
    mutation addLog($date: String!, $patch: String!, $ship: MiningShips!, $miningHead1: MiningHeadData!, $miningHead2: MiningHeadData!, $miningHead3: MiningHeadData!, $miningLocation: MiningLocations!, $sellLocation: SellLocations!, $sellPrice: Float!, $operatingCost: Float!, $profit: Float!, $emptySpace: Float!, $cargoBreakdown: [JSONObject!]!) {
  addLog(logData: {date: $date, patch: $patch, ship: $ship, miningHead1: $miningHead1, miningHead2: $miningHead2, miningHead3: $miningHead3, miningLocation: $miningLocation, sellLocation: $sellLocation, sellPrice: $sellPrice, operatingCost: $operatingCost, profit: $profit, emptySpace: $emptySpace, cargoBreakdown: $cargoBreakdown}) {
    id
  }
}
    `;
export type AddLogMutationFn = ApolloReactCommon.MutationFunction<AddLogMutation, AddLogMutationVariables>;

/**
 * __useAddLogMutation__
 *
 * To run a mutation, you first call `useAddLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLogMutation, { data, loading, error }] = useAddLogMutation({
 *   variables: {
 *      date: // value for 'date'
 *      patch: // value for 'patch'
 *      ship: // value for 'ship'
 *      miningHead1: // value for 'miningHead1'
 *      miningHead2: // value for 'miningHead2'
 *      miningHead3: // value for 'miningHead3'
 *      miningLocation: // value for 'miningLocation'
 *      sellLocation: // value for 'sellLocation'
 *      sellPrice: // value for 'sellPrice'
 *      operatingCost: // value for 'operatingCost'
 *      profit: // value for 'profit'
 *      emptySpace: // value for 'emptySpace'
 *      cargoBreakdown: // value for 'cargoBreakdown'
 *   },
 * });
 */
export function useAddLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddLogMutation, AddLogMutationVariables>) {
        return ApolloReactHooks.useMutation<AddLogMutation, AddLogMutationVariables>(AddLogDocument, baseOptions);
      }
export type AddLogMutationHookResult = ReturnType<typeof useAddLogMutation>;
export type AddLogMutationResult = ApolloReactCommon.MutationResult<AddLogMutation>;
export type AddLogMutationOptions = ApolloReactCommon.BaseMutationOptions<AddLogMutation, AddLogMutationVariables>;
export const DeleteLogDocument = gql`
    mutation deleteLog($logId: Float!) {
  deleteLog(logId: $logId)
}
    `;
export type DeleteLogMutationFn = ApolloReactCommon.MutationFunction<DeleteLogMutation, DeleteLogMutationVariables>;

/**
 * __useDeleteLogMutation__
 *
 * To run a mutation, you first call `useDeleteLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLogMutation, { data, loading, error }] = useDeleteLogMutation({
 *   variables: {
 *      logId: // value for 'logId'
 *   },
 * });
 */
export function useDeleteLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteLogMutation, DeleteLogMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteLogMutation, DeleteLogMutationVariables>(DeleteLogDocument, baseOptions);
      }
export type DeleteLogMutationHookResult = ReturnType<typeof useDeleteLogMutation>;
export type DeleteLogMutationResult = ApolloReactCommon.MutationResult<DeleteLogMutation>;
export type DeleteLogMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteLogMutation, DeleteLogMutationVariables>;
export const GetAllLogsDocument = gql`
    query getAllLogs {
  getAllLogs {
    data {
      id
      date
      ship
      profit
      miningLocation
      sellLocation
    }
  }
}
    `;

/**
 * __useGetAllLogsQuery__
 *
 * To run a query within a React component, call `useGetAllLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllLogsQuery, GetAllLogsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllLogsQuery, GetAllLogsQueryVariables>(GetAllLogsDocument, baseOptions);
      }
export function useGetAllLogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllLogsQuery, GetAllLogsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllLogsQuery, GetAllLogsQueryVariables>(GetAllLogsDocument, baseOptions);
        }
export type GetAllLogsQueryHookResult = ReturnType<typeof useGetAllLogsQuery>;
export type GetAllLogsLazyQueryHookResult = ReturnType<typeof useGetAllLogsLazyQuery>;
export type GetAllLogsQueryResult = ApolloReactCommon.QueryResult<GetAllLogsQuery, GetAllLogsQueryVariables>;
export const GetLogDocument = gql`
    query getLog($logId: Float!) {
  getLog(logId: $logId) {
    id
    date
    patch
    ship
    miningHead1
    miningHead2
    miningHead3
    miningLocation
    sellLocation
    sellPrice
    operatingCost
    profit
    emptySpace
    cargoBreakdown {
      mineral
      percentage
    }
  }
}
    `;

/**
 * __useGetLogQuery__
 *
 * To run a query within a React component, call `useGetLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogQuery({
 *   variables: {
 *      logId: // value for 'logId'
 *   },
 * });
 */
export function useGetLogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLogQuery, GetLogQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLogQuery, GetLogQueryVariables>(GetLogDocument, baseOptions);
      }
export function useGetLogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLogQuery, GetLogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLogQuery, GetLogQueryVariables>(GetLogDocument, baseOptions);
        }
export type GetLogQueryHookResult = ReturnType<typeof useGetLogQuery>;
export type GetLogLazyQueryHookResult = ReturnType<typeof useGetLogLazyQuery>;
export type GetLogQueryResult = ApolloReactCommon.QueryResult<GetLogQuery, GetLogQueryVariables>;
export const UpdateLogDocument = gql`
    mutation updateLog($logId: Float!, $date: String!, $patch: String!, $ship: MiningShips!, $miningHead1: MiningHeadData!, $miningHead2: MiningHeadData!, $miningHead3: MiningHeadData!, $miningLocation: MiningLocations!, $sellLocation: SellLocations!, $sellPrice: Float!, $operatingCost: Float!, $profit: Float!, $emptySpace: Float!, $cargoBreakdown: [JSONObject!]!) {
  updateLog(logId: $logId, logData: {date: $date, patch: $patch, ship: $ship, miningHead1: $miningHead1, miningHead2: $miningHead2, miningHead3: $miningHead3, miningLocation: $miningLocation, sellLocation: $sellLocation, sellPrice: $sellPrice, operatingCost: $operatingCost, profit: $profit, emptySpace: $emptySpace, cargoBreakdown: $cargoBreakdown}) {
    id
    date
    patch
    ship
    miningHead1
    miningHead2
    miningHead3
    miningLocation
    sellLocation
    sellPrice
    operatingCost
    profit
    emptySpace
    cargoBreakdown {
      mineral
      percentage
    }
  }
}
    `;
export type UpdateLogMutationFn = ApolloReactCommon.MutationFunction<UpdateLogMutation, UpdateLogMutationVariables>;

/**
 * __useUpdateLogMutation__
 *
 * To run a mutation, you first call `useUpdateLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLogMutation, { data, loading, error }] = useUpdateLogMutation({
 *   variables: {
 *      logId: // value for 'logId'
 *      date: // value for 'date'
 *      patch: // value for 'patch'
 *      ship: // value for 'ship'
 *      miningHead1: // value for 'miningHead1'
 *      miningHead2: // value for 'miningHead2'
 *      miningHead3: // value for 'miningHead3'
 *      miningLocation: // value for 'miningLocation'
 *      sellLocation: // value for 'sellLocation'
 *      sellPrice: // value for 'sellPrice'
 *      operatingCost: // value for 'operatingCost'
 *      profit: // value for 'profit'
 *      emptySpace: // value for 'emptySpace'
 *      cargoBreakdown: // value for 'cargoBreakdown'
 *   },
 * });
 */
export function useUpdateLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLogMutation, UpdateLogMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLogMutation, UpdateLogMutationVariables>(UpdateLogDocument, baseOptions);
      }
export type UpdateLogMutationHookResult = ReturnType<typeof useUpdateLogMutation>;
export type UpdateLogMutationResult = ApolloReactCommon.MutationResult<UpdateLogMutation>;
export type UpdateLogMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLogMutation, UpdateLogMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(input: {token: $token, password: $password}) {
    id
    email
    firstName
    lastName
    fullName
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmDocument = gql`
    mutation Confirm($token: String!) {
  confirm(token: $token)
}
    `;
export type ConfirmMutationFn = ApolloReactCommon.MutationFunction<ConfirmMutation, ConfirmMutationVariables>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, baseOptions);
      }
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = ApolloReactCommon.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(input: {email: $email})
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const ProtectedHelloDocument = gql`
    query ProtectedHello {
  hello
}
    `;

/**
 * __useProtectedHelloQuery__
 *
 * To run a query within a React component, call `useProtectedHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useProtectedHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProtectedHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useProtectedHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProtectedHelloQuery, ProtectedHelloQueryVariables>) {
        return ApolloReactHooks.useQuery<ProtectedHelloQuery, ProtectedHelloQueryVariables>(ProtectedHelloDocument, baseOptions);
      }
export function useProtectedHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProtectedHelloQuery, ProtectedHelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProtectedHelloQuery, ProtectedHelloQueryVariables>(ProtectedHelloDocument, baseOptions);
        }
export type ProtectedHelloQueryHookResult = ReturnType<typeof useProtectedHelloQuery>;
export type ProtectedHelloLazyQueryHookResult = ReturnType<typeof useProtectedHelloLazyQuery>;
export type ProtectedHelloQueryResult = ApolloReactCommon.QueryResult<ProtectedHelloQuery, ProtectedHelloQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    id
    firstName
    lastName
    fullName
    email
    password
    confirmed
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    firstName
    lastName
    fullName
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;