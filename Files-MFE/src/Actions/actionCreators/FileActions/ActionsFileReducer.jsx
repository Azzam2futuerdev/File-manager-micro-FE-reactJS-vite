import * as types from "../../actionsTypes/FileActionsType";


export const addFile= (payload)=>({
    type: types.CREATE_FILES,
    payload,
  })
  export const addFiles= (payload)=>({
    type: types.ADD_FILES,
    payload,
  })
  
  export const removeFile = (fileId) => ({
    type: types.REMOVE_FILE,
    payload: fileId,
  });
  
  export const setFileData = (payload) => ({
    type: types.SET_FILE_DATA,
    payload,
  });
  export const copyItemToBuffer = (payload) => ({
    type: types.COPY_ITEM_TOBUFFER,
    payload,
  });
  
  export const moveFile = (payload) => ({
    type: types.MOVE_FILE,
    payload,
  });
  
  export const renameFile = (name , docId) => ({
    type: types.RENAME_FILE,
    payload : {name : name , docId : docId},
  });
  
  export const changeFile = (payload) => ({
    type: types.CHANGE_FILE,
    payload,
  });
  export const addToDeletedFiles = (payload) => {
    return{
      type: types.ADD_TO_DELETED_FILES,
      payload
    }
  }

  export const clearBuffer = () => ({
    type: types.CLEAR_BUFFER,
  });

  
  // export const recoveryFile = (payload) => {
  //   return{
  //     type: types.RECOVERY_FILE,
  //     payload
  //   }
  // }
  