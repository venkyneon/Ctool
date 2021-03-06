import * as types from './accountActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
import {getSpndAccount} from '../accountAjaxActions';

export function initializeData(_list,valField){
  console.log("initializeData==",_list);
  var list = _list.data.map(function (item) {
        return (
          {
            "label":item.name,
            "value":item[valField],
          }
        );
    }.bind(this));
    return list;
}

export function handleTechDetailsBack(_accountCommInfo){
	return function(dispatch){
		dispatch(handleTechDetailsBackRequest(_accountCommInfo))
	}
}
export function handleTechDetailsBackRequest(_accountCommInfo){
	return{
		  type: types.ACCOUNT_TECHDETAILS_BACK,
			payload:_accountCommInfo
	}
}
export function handleTechDetailsNext(_accountInfo){
	return function(dispatch) {
		dispatch(handleTechDetailsNextRequest(_accountInfo));
		}

}
export function handleTechDetailsNextRequest(_accountInfo) {
    return {
        type: types.ACCOUNT_TECHDETAILS_NEXT,
				payload:_accountInfo
    }
}
export function goToTechnicalDetails(_accountCommInfo){
	return function(dispatch) {
		dispatch(goToTechnicalDetailsRequest(_accountCommInfo));
		}

}
export function goToTechnicalDetailsRequest(_accountCommInfo) {

    return {
        type: types.ACCOUNT_COMMINFO_NEXT,
				payload:_accountCommInfo
    }
}
export function handleInterfaceDetailsBack(_accountInfo){
	return function(dispatch){
		dispatch(handleInterfaceDetailsBackRequest(_accountInfo))
	}
}
export function handleInterfaceDetailsBackRequest(_accountInfo){
	return{
		  type: types.ACCOUNT_INTERFACEDETAILS_BACK,
			payload:_accountInfo
	}
}

export function handleInterfaceDetailsNext(_accountInfo){
	return function(dispatch) {
		dispatch(handleInterfaceDetailsNextRequest(_accountInfo));
		}
}
export function handleInterfaceDetailsNextRequest(_accountInfo) {
    return {
        type: types.ACCOUNT_INTERFACEDETAILS_NEXT,
				payload:_accountInfo
    }
}

export function handleReviewDetailsBack(_accountInfo){
	return function(dispatch){
		dispatch(handleReviewDetailsBackRequest(_accountInfo))
	}
}
export function handleReviewDetailsBackRequest(_accountInfo){
	return{
		  type: types.ACCOUNT_REVIEWDETAILS_BACK,
			payload:_accountInfo
	}
}
export function createNewAccount(_accountInfo) {
	return function (dispatch,getState) {
		dispatch(CreateNewAccountRequest());
		var request = {
								url:config.getUrl('CreateAccount'),
									method:'POST',
								data:_accountInfo,
								successCallback:CreateNewAccountSuccess,
								failureCallback:CreateNewAccountFailure
							};
		return httpRequest(dispatch,getState,request);
	}
}

	export function CreateNewAccountRequest() {
		return{
			type: types.ACCOUNT_CREATE_NEW,
		}
	}
	export function CreateNewAccountSuccess(data) {
	//	localStorage.setItem("token",data.token);
		return {
			type: types.ACCOUNT_CREATE_NEW_SUCCESS,
			payload: data
		}
	}
	export function CreateNewAccountFailure(data) {
		return {
			type: types.ACCOUNT_CREATE_NEW_FAILURE,
			payload: data
		}
	}
export function getMetadata(){
	return function (dispatch,getState) {
		dispatch(getMetadataRequest());

		var request = {
								url:config.getUrl('GetCountryList'),
								method:'GET',
								successCallback:getMetadataRequestSuccess,
								failureCallback:getMetadataRequestFailure
							};
		return httpRequest(dispatch,getState,request);

	}
}
export function getMetadataRequest() {
	return{
		type: types.ACCOUNT_GET_COUNTRY_LIST
	}
}

export function getMetadataRequestSuccess(data) {
	//	localStorage.setItem("token",data.token);
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS,
		payload: data
	}
}
export function getMetadataRequestFailure(data) {
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_FAILURE,
		payload: data
	}
}

export function handleSuspendAccCompany(_accountSpndInfo){
	return function(dispatch,getState){
		dispatch(handleSuspendAccCompanyRequest(_accountSpndInfo));
    return getSpndAccount(_accountSpndInfo);
	}
}
export function handleSuspendAccCompanyRequest(_accountSpndInfo){
	return{
		  type: types.SUSPEND_ACC_COMPANY,
			payload:_accountSpndInfo
	}
}
