export const filterUserByDate = (RegisteredUsers) => {
  const today = new Date();
  const today_date = today.toLocaleString().split(",")[0];

  const today_users = RegisteredUsers.filter((item) => {
    const users_date = item?.createdAt.toLocaleString().split(",")[0];
    return users_date === today_date;
  });

  return {today_users}
};

export const filterUserByRole=(RegisteredUsers)=>{
  const moderators = RegisteredUsers.filter((item) =>item?.Role=="MODERATOR"
    );

  return {moderators}
}