import { WizardValues } from "./types"
import { users } from "./data"

export const validationMessages = {
  required: "${name} is required!",
}

export const userCheck = (name: string) => {
  const userNames = users.flatMap(user => user.name)
  return userNames.some((user) => user.toUpperCase() === name.toUpperCase())
}

export const userUpdate = (data: WizardValues) => {
  const mockUpdatedUsers = users.map((user) => user.name === data.name ? { ...user, ...data } : user)

  return mockUpdatedUsers
}

export const detailsHandler = async ({ name }: Pick<WizardValues, "name">) => {
  const nameCheck = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(userCheck(name))
    }, 1000)
  });
  return nameCheck
};

export const submitHandler = async (data: WizardValues) => {
  const update = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(userUpdate(data))
    }, 1000)
  });
  return update
};
