export class Campaign {
	campaignCustomers : any;
	campaignSentDate: Date;
	campaignUrl: string;
	name: string;
	status: string; // ['NEW', 'READY', 'SENT'],
	templatePath: string;
	uuid: string;
}