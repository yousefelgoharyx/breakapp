export default async function upload_image(image) {
  return new Promise(async (resolve, reject) => {
    try {
      const avatarData = new FormData();
      avatarData.append("avatar", {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      });
      const json_response = await fetch(
        "https://break-app-123.herokuapp.com/api/v1/users/uploadAvatar",
        {
          method: "post",
          body: avatarData,
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        },
      );

      const response = await json_response.json();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}
