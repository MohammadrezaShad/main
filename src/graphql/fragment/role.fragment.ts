export const RoleData = `
fragment RoleData on RoleEntity {
    _id
    title
    name
    permissions{
    ...PermissionData
    }
    createdAt
    updatedAt
}`;
