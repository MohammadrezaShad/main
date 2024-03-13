export const UserData = `
fragment UserData on UserEntity {
    _id
    email
    displayName
    isVerified
    createdAt
    roles{
      ...RoleData
    }
    permissions{
     ...PermissionData
    }
}`;
