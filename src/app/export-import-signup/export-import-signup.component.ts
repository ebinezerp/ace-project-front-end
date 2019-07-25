import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExporterOrImporter } from '../model/exporter-or-importer';

@Component({
  selector: 'app-export-import-signup',
  templateUrl: './export-import-signup.component.html',
  styleUrls: ['./export-import-signup.component.scss']
})
export class ExportImportSignupComponent implements OnInit {

  formGroup: FormGroup;
  exportorOrImporter: ExporterOrImporter;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.exportorOrImporter = new ExporterOrImporter();
    this.formGroup = this.formBuilder.group(this.exportorOrImporter);
  }

}
